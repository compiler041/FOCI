// ============================================
// FOCI CONTENT SCRIPT — SELF-CONTAINED BLOCKER
// ============================================

const FOCI_ORIGINS = ['localhost:5173', 'foci.digital']

// 1. TOKEN BRIDGE
function tryBridgeToken() {
  if (!FOCI_ORIGINS.some(o => window.location.host.includes(o))) return
  const token = localStorage.getItem('foci_token')
  if (token) {
    chrome.runtime.sendMessage({ type: 'SET_TOKEN', token }).catch(() => {})
  }
}
tryBridgeToken()
setInterval(tryBridgeToken, 3000)

window.addEventListener('storage', (e) => {
  if (e.key === 'foci_token') {
    if (e.newValue) chrome.runtime.sendMessage({ type: 'SET_TOKEN', token: e.newValue }).catch(() => {})
    else chrome.runtime.sendMessage({ type: 'CLEAR_TOKEN' }).catch(() => {})
  }
})

// 2. MAIN BLOCKER
async function checkAndBlock() {
  const url = window.location.href

  // Skip internal pages and Foci app
  if (url.startsWith('chrome') || url.startsWith('about:') || url.startsWith('edge:')) return
  if (FOCI_ORIGINS.some(o => url.includes(o))) return

  let data
  try {
    data = await new Promise((resolve, reject) => {
      chrome.storage.local.get(
        ['blockedApps', 'youtubeAllowlist', 'youtubePlaylists', 'blockingEnabled', 'breakUntil'],
        (result) => {
          if (chrome.runtime.lastError) reject(chrome.runtime.lastError)
          else resolve(result)
        }
      )
    })
  } catch (e) {
    return
  }

  // If user toggled off "Block Distractions" in popup, don't block
  if (data.blockingEnabled === false) {
    return
  }

  // If user is on an active break
  if (data.breakUntil && Date.now() < data.breakUntil) {
    return
  }

  if (!data.blockedApps || data.blockedApps.length === 0) {
    return
  }

  // Match URL
  let hostname
  try {
    hostname = new URL(url).hostname.replace('www.', '').toLowerCase()
  } catch (e) { return }

  const matchedApp = data.blockedApps.find(app => {
    if (!app.browserUrl) return false
    const h = app.browserUrl.replace('www.', '').replace('https://', '').replace('http://', '').toLowerCase().trim()
    return hostname === h || hostname.endsWith('.' + h)
  })

  if (!matchedApp) {
    return
  }

  // YouTube allowlist + playlist check
  if (hostname.includes('youtube.com')) {
    try {
      const urlObj = new URL(url)
      const vid = urlObj.searchParams.get('v')
      const listId = urlObj.searchParams.get('list')

      // If video is part of an allowlisted playlist, allow it
      if (listId && data.youtubePlaylists?.some(p => p.playlistId === listId)) {
        return
      }

      // If individual video is allowlisted, allow it
      if (vid && data.youtubeAllowlist?.some(v => v.videoId === vid)) {
        return
      }
    } catch (e) {}
  }

  showBlockScreen(matchedApp.appName + ' is blocked')
}

// 3. BLOCK SCREEN
function showBlockScreen(reason) {
  try {
    document.querySelectorAll('video, audio').forEach(m => {
      m.pause(); m.muted = true; m.src = ''; m.load()
    })
  } catch (e) {}

  window.stop()

  // Use document.open/write/close — most reliable way to replace page
  document.open()
  document.write(`<!DOCTYPE html>
<html>
<head>
  <title>Blocked by Foci</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #0a0a0c;
      display: flex; align-items: center; justify-content: center;
      min-height: 100vh;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      color: white;
    }
    .fc { text-align: center; padding: 48px; max-width: 480px; }
    .fc-logo { font-size: 16px; font-weight: 800; color: #e6c27a; letter-spacing: 3px; margin-bottom: 40px; }
    .fc-icon { font-size: 64px; margin-bottom: 24px; }
    .fc-title { font-size: 28px; font-weight: 800; color: #fff; margin-bottom: 16px; }
    .fc-reason {
      font-size: 14px; color: #e6c27a;
      background: rgba(230,194,122,0.1); border: 1px solid rgba(230,194,122,0.2);
      padding: 8px 20px; border-radius: 20px;
      display: inline-block; margin-bottom: 24px; font-weight: 600;
    }
    .fc-msg { font-size: 15px; color: #9ca3af; line-height: 1.7; margin-bottom: 40px; }
    .fc-btn {
      display: block; width: 100%; padding: 14px;
      background: linear-gradient(135deg, #e6c27a, #d4af37);
      color: #000; border: none; border-radius: 12px;
      font-size: 15px; font-weight: 700; cursor: pointer; margin-bottom: 16px;
    }
    .fc-link { color: #9ca3af; font-size: 13px; text-decoration: none; }
    .fc-link:hover { color: #e6c27a; }
  </style>
</head>
<body>
  <div class="fc">
    <div class="fc-logo">🎯 FOCI</div>
    <div class="fc-icon">🔒</div>
    <h1 class="fc-title">This site is blocked</h1>
    <p class="fc-reason">${reason}</p>
    <p class="fc-msg">You blocked this to stay focused.<br>Keep going — you're doing great.</p>
    <button class="fc-btn" onclick="history.back()">Go Back</button>
    <br><br>
    <a class="fc-link" href="http://localhost:5173" target="_blank">Open Foci Dashboard</a>
  </div>
</body>
</html>`)
  document.close()
}

// 4. RUN — wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', checkAndBlock)
} else {
  checkAndBlock()
}

// 5. SPA URL CHANGE WATCHER
let lastUrl = window.location.href
setInterval(() => {
  if (window.location.href !== lastUrl) {
    lastUrl = window.location.href
    checkAndBlock()
  }
}, 1000)