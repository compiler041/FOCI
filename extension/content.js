// ============================================
// 1. CHECK CURRENT PAGE ON LOAD
// ============================================
async function checkCurrentPage() {
  const url = window.location.href

  // skip extension pages and chrome pages
  if (url.startsWith('chrome://') || url.startsWith('chrome-extension://')) return

  const response = await chrome.runtime.sendMessage({
    type: 'CHECK_URL',
    url: url
  })

  if (response?.blocked) {
    showBlockScreen(response.reason)
  }
}

// ============================================
// 2. SHOW BLOCK SCREEN
// ============================================
function showBlockScreen(reason) {
  // prevent page from loading
  document.documentElement.innerHTML = ''

  // create block overlay
  const overlay = document.createElement('div')
  overlay.id = 'foci-block-screen'
  overlay.innerHTML = `
    <div class="foci-container">
      <div class="foci-logo">🎯 Foci</div>
      <div class="foci-icon">🔒</div>
      <h1 class="foci-title">This site is blocked</h1>
      <p class="foci-reason">${reason}</p>
      <p class="foci-message">You blocked this to stay focused.<br/>Keep going — you're doing great.</p>
      <button class="foci-btn" onclick="history.back()">Go Back</button>
      <a class="foci-link" href="https://foci.digital" target="_blank">
        Open Foci Dashboard
      </a>
    </div>
  `

  // inject styles
  const style = document.createElement('style')
  style.textContent = `
    * { margin: 0; padding: 0; box-sizing: border-box; }

    #foci-block-screen {
      position: fixed;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      background: #0f0f0f;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999999;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    .foci-container {
      text-align: center;
      padding: 48px;
      max-width: 480px;
    }

    .foci-logo {
      font-size: 18px;
      font-weight: 700;
      color: #888;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 32px;
    }

    .foci-icon {
      font-size: 64px;
      margin-bottom: 24px;
    }

    .foci-title {
      font-size: 28px;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 12px;
    }

    .foci-reason {
      font-size: 14px;
      color: #6366f1;
      background: rgba(99, 102, 241, 0.1);
      padding: 8px 16px;
      border-radius: 20px;
      display: inline-block;
      margin-bottom: 20px;
    }

    .foci-message {
      font-size: 15px;
      color: #888;
      line-height: 1.6;
      margin-bottom: 36px;
    }

    .foci-btn {
      display: block;
      width: 100%;
      padding: 14px;
      background: #6366f1;
      color: white;
      border: none;
      border-radius: 12px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      margin-bottom: 16px;
      transition: background 0.2s;
    }

    .foci-btn:hover {
      background: #4f46e5;
    }

    .foci-link {
      display: block;
      color: #888;
      font-size: 13px;
      text-decoration: none;
      transition: color 0.2s;
    }

    .foci-link:hover {
      color: #fff;
    }
  `

  document.head.appendChild(style)
  document.body.appendChild(overlay)
}

// ============================================
// 3. WATCH FOR URL CHANGES (SPA support)
// YouTube is a single page app — URL changes
// without page reload so we need to watch it
// ============================================
let lastUrl = window.location.href

const observer = new MutationObserver(() => {
  const currentUrl = window.location.href
  if (currentUrl !== lastUrl) {
    lastUrl = currentUrl
    checkCurrentPage()
  }
})

observer.observe(document.documentElement, {
  subtree: true,
  childList: true
})

// ============================================
// 4. RUN ON PAGE LOAD
// ============================================
checkCurrentPage()