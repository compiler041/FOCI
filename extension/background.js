const API_BASE = 'http://localhost:3000' // your backend URL
const WEB_APP_ORIGIN = 'http://localhost:5173' // your React app URL
const SYNC_INTERVAL_MINUTES = 0.5 // sync every 30 seconds

// ============================================
// 1. ON INSTALL — start everything
// ============================================
chrome.runtime.onInstalled.addListener(async () => {
  console.log('Foci extension installed')
  await syncRules()
  setupAlarm()
})

// ============================================
// 2. ALARM — sync rules every 30 seconds
// ============================================
function setupAlarm() {
  chrome.alarms.create('syncRules', {
    periodInMinutes: SYNC_INTERVAL_MINUTES
  })
}

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'syncRules') {
    syncRules()
  }
})

// ============================================
// 3. GET JWT — read from web app's localStorage
// ============================================
async function getToken() {
  return new Promise((resolve) => {
    chrome.storage.local.get('foci_token', (result) => {
      resolve(result.foci_token || null)
    })
  })
}

// ============================================
// 4. SYNC RULES — fetch from your API
// ============================================
async function syncRules() {
  try {
    const token = await getToken()
    if (!token) {
      console.log('No token found — user not logged in')
      return
    }

    // fetch blocked apps
    const blockedRes = await fetch(`${API_BASE}/api/blocked-apps`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    const { apps } = await blockedRes.json()

    // fetch youtube allowlist
    const ytRes = await fetch(`${API_BASE}/api/youtube-allowlist`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    const { allowlist } = await ytRes.json()

    // save to extension storage
    await chrome.storage.local.set({
      blockedApps: apps.filter(app => app.isBlocked),
      youtubeAllowlist: allowlist
    })

    console.log('Rules synced successfully')

  } catch (error) {
    console.error('Sync failed:', error)
  }
}

// ============================================
// 5. LISTEN FOR MESSAGES — from content.js
// ============================================
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

  if (message.type === 'CHECK_URL') {
    checkUrl(message.url).then(sendResponse)
    return true
  }

  if (message.type === 'SET_TOKEN') {
    chrome.storage.local.set({ foci_token: message.token })
    syncRules()
    sendResponse({ success: true })
  }

  if (message.type === 'CLEAR_TOKEN') {
    chrome.storage.local.remove(['foci_token', 'blockedApps', 'youtubeAllowlist'])
    sendResponse({ success: true })
  }

  // ← ADD HERE
  if (message.type === 'SYNC_NOW') {
    syncRules().then(() => sendResponse({ success: true }))
    return true // keep channel open for async
  }

})
// ============================================
// 6. CHECK URL — core blocking logic
// ============================================
async function checkUrl(url) {
  try {
    const { blockedApps, youtubeAllowlist } = await chrome.storage.local.get([
      'blockedApps',
      'youtubeAllowlist'
    ])

    if (!blockedApps || blockedApps.length === 0) return { blocked: false }

    const urlObj = new URL(url)
    const hostname = urlObj.hostname.replace('www.', '')

    // check if this site is in blocked apps
    const blockedApp = blockedApps.find(app =>
      app.browserUrl && hostname.includes(app.browserUrl.replace('www.', ''))
    )

    if (!blockedApp) return { blocked: false }

    // special YouTube logic — check allowlist
    if (hostname.includes('youtube.com')) {
      const videoId = urlObj.searchParams.get('v')

      // not a video page — block it
      if (!videoId) return { blocked: true, reason: 'YouTube is blocked' }

      // check if this video is in allowlist
      const isAllowed = youtubeAllowlist?.some(video => video.videoId === videoId)

      if (isAllowed) return { blocked: false }
      return { blocked: true, reason: 'This YouTube video is not in your allowlist' }
    }

    // all other blocked apps — block entirely
    return { blocked: true, reason: `${blockedApp.appName} is blocked` }

  } catch (error) {
    return { blocked: false }
  }
}