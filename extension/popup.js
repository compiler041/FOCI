document.addEventListener('DOMContentLoaded', async () => {

  // ============================================
  // 1. CHECK IF USER IS LOGGED IN
  // ============================================
  const { foci_token, blockedApps, blockingEnabled } = await chrome.storage.local.get([
    'foci_token',
    'blockedApps',
    'blockingEnabled'
  ])

  if (!foci_token) {
    // show not logged in state
    document.getElementById('notLoggedIn').style.display = 'block'
    document.getElementById('statusDot').classList.add('inactive')
    return
  }

  // show logged in state
  document.getElementById('loggedIn').style.display = 'block'

  // ============================================
  // 2. RENDER BLOCKED APPS LIST
  // ============================================
  const appList = document.getElementById('appList')

  if (!blockedApps || blockedApps.length === 0) {
    appList.innerHTML = '<div class="empty">No apps blocked yet</div>'
  } else {
    appList.innerHTML = blockedApps.map(app => `
      <div class="app-item">
        <div>
          <div class="app-name">${app.appName}</div>
          <div class="app-url">${app.browserUrl || ''}</div>
        </div>
        <div class="app-badge">Blocked</div>
      </div>
    `).join('')
  }

  // ============================================
  // 3. BLOCKING TOGGLE
  // ============================================
  const toggle = document.getElementById('blockToggle')
  const toggleSub = document.getElementById('toggleSub')

  // set initial state
  toggle.checked = blockingEnabled !== false // default true

  toggle.addEventListener('change', async () => {
    await chrome.storage.local.set({ blockingEnabled: toggle.checked })
    toggleSub.textContent = toggle.checked
      ? 'Protecting you right now'
      : 'Blocking is paused'
  })

  // ============================================
  // 4. SYNC BUTTON
  // ============================================
  const syncBtn = document.getElementById('syncBtn')
  const syncStatus = document.getElementById('syncStatus')

  syncBtn.addEventListener('click', async () => {
    syncBtn.textContent = 'Syncing...'
    syncBtn.disabled = true

    await chrome.runtime.sendMessage({ type: 'SYNC_NOW' })

    syncBtn.textContent = 'Sync Rules Now'
    syncBtn.disabled = false
    syncStatus.textContent = 'Last synced just now'
  })
})