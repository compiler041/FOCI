const API_BASE = 'http://localhost:5000'

document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search)
  const durationStr = urlParams.get('duration')
  const requestedDuration = durationStr ? parseInt(durationStr) : 10

  const countdownEl = document.getElementById('countdown')
  const cancelBtn = document.getElementById('cancelBtn')
  const adSpace = document.getElementById('adSpace')
  const iframe = document.getElementById('bgMusic')

  // Play nature music (YouTube embed with autoplay)
  // We use a known 10-hour nature/focus track
  iframe.src = "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&loop=1&start=10&controls=0"

  let waitTime = 30 // Default 30s for level 1
  
  // Try to fetch user's strictness level
  try {
    const { foci_token } = await chrome.storage.local.get('foci_token')
    if (foci_token) {
      const res = await fetch(`${API_BASE}/api/auth/me`, {
        headers: { 'Authorization': `Bearer ${foci_token}` }
      })
      if (res.ok) {
        const data = await res.json()
        const level = data.user?.strictnessLevel || 1
        
        if (level === 2) {
          waitTime = 60
          adSpace.style.display = 'block'
        } else if (level === 3) {
          waitTime = 120 // 2 minutes wait for premium/hardcore
          adSpace.style.display = 'block'
        }
      }
    }
  } catch(e) {
    console.warn("Could not fetch strictness, defaulting to 30s")
  }

  // Timer loop
  function updateTimer() {
    countdownEl.textContent = waitTime.toString()
    if (waitTime <= 0) {
      clearInterval(timerInterval)
      startBreak()
    }
    waitTime--
  }

  updateTimer()
  const timerInterval = setInterval(updateTimer, 1000)

  // Cancel
  cancelBtn.addEventListener('click', () => {
    window.close()
  })

  // Start the actual break
  async function startBreak() {
    countdownEl.textContent = "Starting..."
    
    // Attempt to log break to backend
    try {
      const { foci_token } = await chrome.storage.local.get('foci_token')
      if (foci_token) {
        await fetch(`${API_BASE}/api/breaks`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${foci_token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ duration: requestedDuration })
        })
      }
    } catch(e) {
      console.warn("Could not log break to server")
    }

    // Tell background script to start break
    chrome.runtime.sendMessage({
      type: 'START_BREAK',
      duration: requestedDuration
    }, () => {
      // Close this tab
      window.close()
    })
  }

})
