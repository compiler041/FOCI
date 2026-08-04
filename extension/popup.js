const API_BASE = 'http://localhost:5000'

document.addEventListener('DOMContentLoaded', async () => {

  // ── 1. CHECK LOGIN STATE ───────────────────
  let { foci_token, blockedApps, blockingEnabled, breakUntil } = await chrome.storage.local.get([
    'foci_token', 'blockedApps', 'blockingEnabled', 'breakUntil'
  ])

  if (!foci_token) {
    document.getElementById('state-logged-out').style.display = 'flex'
    document.getElementById('statusPill').classList.add('inactive')
    document.getElementById('statusText').textContent = 'Not connected'
    return
  }

  document.getElementById('state-logged-in').style.display = 'flex'

  // ── 2. RENDER BLOCKED APPS ────────────────
  renderApps(blockedApps)

  // ── 3. FETCH LIVE DATA ────────────────────
  try {
    const [sessionsRes, focusTodayRes] = await Promise.all([
      fetch(`${API_BASE}/api/sessions`, { headers: { Authorization: `Bearer ${foci_token}` } }),
      fetch(`${API_BASE}/api/sessions`, { headers: { Authorization: `Bearer ${foci_token}` } }),
    ])

    const sessionsData = await sessionsRes.json()
    const sessions = sessionsData.sessions || []

    // Active session
    const active = sessions.find(s => s.status === 'ACTIVE')
    if (active) {
      const pulse = document.getElementById('sessionPulse')
      const label = document.getElementById('sessionLabel')
      const timeEl = document.getElementById('sessionTime')
      pulse.classList.remove('idle')
      label.textContent = 'Session Active'
      // Live timer
      const startMs = new Date(active.startTime).getTime()
      function tick() {
        const elapsed = Math.floor((Date.now() - startMs) / 1000)
        const h = Math.floor(elapsed / 3600)
        const m = Math.floor((elapsed % 3600) / 60)
        const s = elapsed % 60
        timeEl.textContent = h > 0
          ? `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`
          : `${m}:${String(s).padStart(2,'0')}`
      }
      tick()
      setInterval(tick, 1000)
    } else {
      document.getElementById('sessionLabel').textContent = 'No active session'
    }

    // Focus score from today's data
    const today = new Date(); today.setHours(0,0,0,0)
    const todaySecs = sessions
      .filter(s => s.status === 'COMPLETED' && new Date(s.startTime) >= today)
      .reduce((a, s) => a + (s.duration || 0), 0)

    const score = Math.min(10, (todaySecs / (8 * 3600)) * 10)
    const label = score >= 9 ? 'Deep Focus 🔥' : score >= 7 ? 'Strong Focus' : score >= 5 ? 'Good Focus' : score >= 2 ? 'Getting Started' : 'No sessions yet'
    document.getElementById('focusScore').textContent = score.toFixed(1)
    document.getElementById('focusLabel').textContent = label

  } catch (e) {
    console.error('Popup data fetch error:', e)
  }

  // ── 4. BLOCKING TOGGLE ────────────────────
  const toggle = document.getElementById('blockToggle')
  const toggleSub = document.getElementById('toggleSub')
  toggle.checked = blockingEnabled !== false

  toggle.addEventListener('change', async () => {
    await chrome.storage.local.set({ blockingEnabled: toggle.checked })
    toggleSub.textContent = toggle.checked ? 'Protecting you now' : 'Blocking is paused'
    if (!toggle.checked) {
      document.getElementById('statusPill').classList.add('inactive')
      document.getElementById('statusText').textContent = 'Paused'
    } else {
      document.getElementById('statusPill').classList.remove('inactive')
      document.getElementById('statusText').textContent = 'Active'
    }
  })

  // ── 5. SYNC BUTTON ────────────────────────
  const syncBtn = document.getElementById('syncBtn')
  const syncStatus = document.getElementById('syncStatus')

  syncBtn.addEventListener('click', async () => {
    syncBtn.textContent = '⟳ Syncing...'
    syncBtn.disabled = true
    try {
      await chrome.runtime.sendMessage({ type: 'SYNC_NOW' })
      const { blockedApps: freshApps } = await chrome.storage.local.get('blockedApps')
      renderApps(freshApps)
      syncStatus.textContent = `Synced at ${new Date().toLocaleTimeString()}`
    } catch (e) {
      syncStatus.textContent = 'Sync failed'
    }
    syncBtn.textContent = '⟳ Sync Rules'
    syncBtn.disabled = false
  })
  // ── 6. BREAK LOGIC ────────────────────────
  const breakUI = document.getElementById('breakUI')
  const activeBreakUI = document.getElementById('activeBreakUI')
  const breakTimeLeft = document.getElementById('breakTimeLeft')
  const startBreakBtn = document.getElementById('startBreakBtn')
  const durationSelect = document.getElementById('breakDuration')

  let breakTimer = null

  function updateBreakUI() {
    if (breakUntil && Date.now() < breakUntil) {
      breakUI.style.display = 'none'
      activeBreakUI.style.display = 'flex'
      
      if (breakTimer) clearInterval(breakTimer)
      breakTimer = setInterval(() => {
        const remaining = breakUntil - Date.now()
        if (remaining <= 0) {
          clearInterval(breakTimer)
          breakUntil = null
          chrome.storage.local.remove('breakUntil')
          updateBreakUI()
        } else {
          const m = Math.floor(remaining / 60000)
          const s = Math.floor((remaining % 60000) / 1000)
          breakTimeLeft.textContent = `${m}:${String(s).padStart(2,'0')}`
        }
      }, 1000)
    } else {
      breakUI.style.display = 'flex'
      activeBreakUI.style.display = 'none'
      if (breakTimer) clearInterval(breakTimer)
    }
  }

  updateBreakUI()

  startBreakBtn.addEventListener('click', () => {
    const duration = parseInt(durationSelect.value)
    // Open friction screen
    chrome.tabs.create({ url: chrome.runtime.getURL(`break-friction.html?duration=${duration}`) })
  })

})

// ── HELPERS ───────────────────────────────
function renderApps(blockedApps) {
  const list = document.getElementById('appList')
  if (!blockedApps || blockedApps.length === 0) {
    list.innerHTML = '<div class="empty-text">No apps blocked yet</div>'
    return
  }
  list.innerHTML = blockedApps.slice(0, 5).map(app => `
    <div class="app-row">
      <div class="app-dot"></div>
      <div style="flex:1; overflow:hidden;">
        <div class="app-name">${app.appName}</div>
        ${app.browserUrl ? `<div class="app-url">${app.browserUrl}</div>` : ''}
      </div>
      <div class="app-badge">Blocked</div>
    </div>
  `).join('') + (blockedApps.length > 5
    ? `<div class="empty-text">+${blockedApps.length - 5} more — open dashboard</div>`
    : '')
}