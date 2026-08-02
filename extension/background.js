const API_BASE = 'http://localhost:5000'
const SYNC_INTERVAL_MINUTES = 0.5

// ============================================
// 1. ON INSTALL / STARTUP
// ============================================
chrome.runtime.onInstalled.addListener(async () => {
  console.log('Foci extension installed')
  await syncRules()
  setupAlarm()
})

chrome.runtime.onStartup.addListener(async () => {
  await syncRules()
  setupAlarm()
})

// ============================================
// 2. ALARM
// ============================================
function setupAlarm() {
  chrome.alarms.create('syncRules', { periodInMinutes: SYNC_INTERVAL_MINUTES })
}
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'syncRules') syncRules()
})

// ============================================
// 3. GET TOKEN
// ============================================
async function getToken() {
  const result = await chrome.storage.local.get('foci_token')
  return result.foci_token || null
}

// ============================================
// 4. SYNC RULES
// ============================================
async function syncRules() {
  try {
    const token = await getToken()
    if (!token) return

    const [blockedRes, ytRes] = await Promise.all([
      fetch(`${API_BASE}/api/blocked-apps`, { headers: { Authorization: `Bearer ${token}` } }),
      fetch(`${API_BASE}/api/youtube-allowlist`, { headers: { Authorization: `Bearer ${token}` } })
    ])

    const { apps } = await blockedRes.json()
    const { allowlist } = await ytRes.json()

    await chrome.storage.local.set({
      blockedApps: apps.filter(a => a.isBlocked),
      youtubeAllowlist: allowlist || []
    })

    console.log(`Foci synced: ${apps.filter(a => a.isBlocked).length} blocked`)
  } catch (e) {
    console.error('Foci sync failed:', e)
  }
}

// ============================================
// 6. CHECK URL
// ============================================
async function shouldBlock(url) {
  try {
    if (!url || url.startsWith('chrome') || url.startsWith('about:') || url.startsWith('http://localhost:5173')) {
      return null
    }

    const data = await chrome.storage.local.get([
      'blockedApps', 'youtubeAllowlist', 'blockingEnabled'
    ])

    if (data.blockingEnabled === false) return null
    if (!data.blockedApps || !data.blockedApps.length) return null

    const urlObj = new URL(url)
    const hostname = urlObj.hostname.replace('www.', '').toLowerCase()

    const app = data.blockedApps.find(a => {
      if (!a.browserUrl) return false
      const h = a.browserUrl.replace('www.', '').toLowerCase()
      return hostname === h || hostname.endsWith('.' + h)
    })

    if (!app) return null

    // YouTube allowlist
    if (hostname.includes('youtube.com')) {
      const vid = urlObj.searchParams.get('v')
      if (!vid) return `YouTube is blocked`
      if (data.youtubeAllowlist?.some(v => v.videoId === vid)) return null
      return `This YouTube video is not in your allowlist`
    }

    return `${app.appName} is blocked`
  } catch (e) {
    return null
  }
}

// ============================================
// 7. INJECT BLOCK PAGE
// ============================================
function injectBlockPage(tabId, reason) {
  chrome.scripting.executeScript({
    target: { tabId },
    func: (r) => {
      // Kill media
      try { document.querySelectorAll('video,audio').forEach(m => { m.pause(); m.muted = true; m.src = ''; m.load() }) } catch(e){}
      
      // Nuke page
      document.documentElement.innerHTML = `
        <head><style>
          *{margin:0;padding:0;box-sizing:border-box}
          body{background:#0a0a0c;display:flex;align-items:center;justify-content:center;min-height:100vh;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}
          .fc{text-align:center;padding:48px;max-width:480px}
          .fc-logo{font-size:16px;font-weight:800;color:#e6c27a;letter-spacing:3px;margin-bottom:40px}
          .fc-icon{font-size:64px;margin-bottom:24px}
          .fc-title{font-size:28px;font-weight:800;color:#fff;margin-bottom:16px}
          .fc-reason{font-size:14px;color:#e6c27a;background:rgba(230,194,122,.1);border:1px solid rgba(230,194,122,.2);padding:8px 20px;border-radius:20px;display:inline-block;margin-bottom:24px;font-weight:600}
          .fc-msg{font-size:15px;color:#9ca3af;line-height:1.7;margin-bottom:40px}
          .fc-btn{display:block;width:100%;padding:14px;background:linear-gradient(135deg,#e6c27a,#d4af37);color:#000;border:none;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;margin-bottom:16px}
          .fc-link{color:#9ca3af;font-size:13px;text-decoration:none}
          .fc-link:hover{color:#e6c27a}
        </style></head>
        <body><div class="fc">
          <div class="fc-logo">🎯 FOCI</div>
          <div class="fc-icon">🔒</div>
          <h1 class="fc-title">This site is blocked</h1>
          <p class="fc-reason">${r}</p>
          <p class="fc-msg">You blocked this to stay focused.<br>Keep going — you're doing great.</p>
          <button class="fc-btn" onclick="history.back()">Go Back</button>
          <a class="fc-link" href="http://localhost:5173" target="_blank">Open Foci Dashboard</a>
        </div></body>`
    },
    args: [reason]
  }).catch(e => console.log('Foci inject failed:', e.message))
}

// ============================================
// 8. INTERCEPT NAVIGATIONS
// ============================================
chrome.webNavigation.onCommitted.addListener(async (details) => {
  if (details.frameId !== 0) return // only main frame
  const reason = await shouldBlock(details.url)
  if (reason) injectBlockPage(details.tabId, reason)
})

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  const url = changeInfo.url || tab.url
  if (!url) return
  if (changeInfo.status === 'loading' || changeInfo.url) {
    const reason = await shouldBlock(url)
    if (reason) injectBlockPage(tabId, reason)
  }
})

// ============================================
// 9. MESSAGES
// ============================================
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'CHECK_URL') {
    shouldBlock(msg.url).then(reason => sendResponse({ blocked: !!reason, reason }))
    return true
  }
  if (msg.type === 'SET_TOKEN') {
    chrome.storage.local.set({ foci_token: msg.token })
    syncRules()
    sendResponse({ success: true })
  }
  if (msg.type === 'CLEAR_TOKEN') {
    chrome.storage.local.remove(['foci_token', 'blockedApps', 'youtubeAllowlist'])
    sendResponse({ success: true })
  }
  if (msg.type === 'SYNC_NOW') {
    syncRules().then(() => sendResponse({ success: true }))
    return true
  }
})