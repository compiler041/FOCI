import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check, Plus, X, Globe } from 'lucide-react'
import client from '../api/client'
import { useAuth } from '../context/AuthContext'
import logoImg from '../assets/logo.png'
import './Onboarding.css'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const QUICK_ADD_SUGGESTIONS = [
  { appName: 'Instagram', browserUrl: 'instagram.com' },
  { appName: 'Twitter/X', browserUrl: 'twitter.com' },
  { appName: 'Facebook', browserUrl: 'facebook.com' },
  { appName: 'TikTok', browserUrl: 'tiktok.com' },
  { appName: 'Reddit', browserUrl: 'reddit.com' },
  { appName: 'YouTube', browserUrl: 'youtube.com' }
]

export default function Onboarding() {
  const navigate = useNavigate()
  const { fetchUser } = useAuth()
  const [step, setStep] = useState(1)
  const [selectedDays, setSelectedDays] = useState([0, 1, 2, 3, 4]) // Mon-Fri
  const [startTime, setStartTime] = useState('05:00')
  const [endTime, setEndTime] = useState('23:00')
  const [saving, setSaving] = useState(false)

  // Step 3 state
  const [blockedApps, setBlockedApps] = useState([])
  const [appName, setAppName] = useState('')
  const [appUrl, setAppUrl] = useState('')

  function toggleDay(idx) {
    setSelectedDays(prev =>
      prev.includes(idx) ? prev.filter(d => d !== idx) : [...prev, idx]
    )
  }

  async function handleFinishStep2() {
    setSaving(true)
    try {
      await client.post('/api/schedules', {
        label: 'Focus Schedule',
        startTime,
        endTime,
        daysOfWeek: selectedDays,
        isActive: true,
      })
      await fetchUser() // Update context so we don't get redirected back here
      setStep(3)
    } catch (e) {
      console.error(e)
    } finally {
      setSaving(false)
    }
  }

  function handleAddApp(e) {
    e?.preventDefault()
    if (!appName || !appUrl) return
    setBlockedApps(prev => [...prev, { appName, browserUrl: appUrl }])
    setAppName('')
    setAppUrl('')
  }

  function handleRemoveApp(idx) {
    setBlockedApps(prev => prev.filter((_, i) => i !== idx))
  }

  function handleQuickAdd(suggestion) {
    const isAdded = blockedApps.some(app => app.browserUrl === suggestion.browserUrl)
    if (!isAdded) {
      setBlockedApps(prev => [...prev, suggestion])
    }
  }

  async function handleFinishStep3() {
    setSaving(true)
    try {
      for (const app of blockedApps) {
        await client.post('/api/blocked-apps', app)
      }
      setStep(4)
    } catch (e) {
      console.error(e)
    } finally {
      setSaving(false)
    }
  }

  function skipStep3() {
    setStep(4)
  }

  return (
    <div className="onboarding-page">
      <div className="onboarding-container fade-up">
        {/* Logo */}
        <div className="onboarding-logo">
          <img src={logoImg} className="logo-img" style={{ width: 40, height: 40 }} alt="FOCI Logo" />
          <span className="onboarding-logo-text">FOCI</span>
        </div>

        <div className="onboarding-card">
          {/* Step indicator */}
          <div className="onboarding-step-indicator">
            <div className={`onboarding-step-dot ${step === 1 ? 'active' : step > 1 ? 'done' : ''}`} />
            <div className={`onboarding-step-dot ${step === 2 ? 'active' : step > 2 ? 'done' : ''}`} />
            <div className={`onboarding-step-dot ${step === 3 ? 'active' : step > 3 ? 'done' : ''}`} />
            <div className={`onboarding-step-dot ${step === 4 ? 'active' : ''}`} />
          </div>

          {/* Step 1: Select Days */}
          {step === 1 && (
            <>
              <h2 className="onboarding-title">Which days do you focus?</h2>
              <p className="onboarding-subtitle">Select the days you want distractions blocked</p>

              <div className="onboarding-days">
                {DAYS.map((day, i) => (
                  <button
                    key={day}
                    className={`onboarding-day-btn ${selectedDays.includes(i) ? 'selected' : ''}`}
                    onClick={() => toggleDay(i)}
                    id={`onboard-day-${day}`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              <div className="onboarding-actions">
                <button
                  className="btn btn-primary btn-block"
                  onClick={() => setStep(2)}
                  disabled={selectedDays.length === 0}
                  style={{ background: 'linear-gradient(135deg, #e6c27a 0%, #ebd288 100%)' }}
                  id="onboard-next-1"
                >
                  Continue
                </button>
              </div>
            </>
          )}

          {/* Step 2: Set Hours */}
          {step === 2 && (
            <>
              <h2 className="onboarding-title">Set your focus hours</h2>
              <p className="onboarding-subtitle">Apps & sites will be blocked during these hours</p>

              <div className="onboarding-time-row">
                <div className="input-group">
                  <label className="input-label">Start Time</label>
                  <input
                    type="time"
                    className="onboarding-time-input"
                    value={startTime}
                    onChange={e => setStartTime(e.target.value)}
                    id="onboard-start-time"
                  />
                </div>
                <span className="onboarding-time-separator">to</span>
                <div className="input-group">
                  <label className="input-label">End Time</label>
                  <input
                    type="time"
                    className="onboarding-time-input"
                    value={endTime}
                    onChange={e => setEndTime(e.target.value)}
                    id="onboard-end-time"
                  />
                </div>
              </div>

              <p style={{ fontSize: 13, color: 'var(--text-muted)', textAlign: 'center', marginBottom: 24 }}>
                You can change this anytime from the Schedules page
              </p>

              <div className="onboarding-actions">
                <button className="btn btn-ghost" onClick={() => setStep(1)} style={{ flex: 1 }}>
                  Back
                </button>
                <button
                  className="btn btn-primary"
                  onClick={handleFinishStep2}
                  disabled={saving}
                  style={{ flex: 2, background: 'linear-gradient(135deg, #e6c27a 0%, #ebd288 100%)' }}
                  id="onboard-next-2"
                >
                  {saving ? 'Saving...' : 'Continue'}
                </button>
              </div>
            </>
          )}

          {/* Step 3: Blocked Apps */}
          {step === 3 && (
            <>
              <h2 className="onboarding-title">What should we block?</h2>
              <p className="onboarding-subtitle">Add websites and apps that distract you the most</p>

              <div className="onboarding-quick-add">
                {QUICK_ADD_SUGGESTIONS.map((suggestion) => {
                  const isAdded = blockedApps.some(app => app.browserUrl === suggestion.browserUrl)
                  return (
                    <button
                      key={suggestion.browserUrl}
                      className={`onboarding-quick-chip ${isAdded ? 'added' : ''}`}
                      onClick={() => handleQuickAdd(suggestion)}
                      disabled={isAdded}
                    >
                      {suggestion.appName}
                    </button>
                  )
                })}
              </div>

              <form className="onboarding-add-form" onSubmit={handleAddApp}>
                <div className="input-group">
                  <input
                    type="text"
                    className="input"
                    placeholder="App Name (e.g. Instagram)"
                    value={appName}
                    onChange={e => setAppName(e.target.value)}
                  />
                </div>
                <div className="input-group" style={{ position: 'relative' }}>
                  <Globe className="input-icon-left" size={18} />
                  <input
                    type="text"
                    className="input with-icon"
                    placeholder="URL (e.g. instagram.com)"
                    value={appUrl}
                    onChange={e => setAppUrl(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-secondary" disabled={!appName || !appUrl}>
                  <Plus size={18} />
                  Add
                </button>
              </form>

              {blockedApps.length > 0 && (
                <div className="onboarding-blocked-list">
                  {blockedApps.map((app, idx) => (
                    <div key={idx} className="onboarding-blocked-item">
                      <div className="onboarding-blocked-info">
                        <span className="onboarding-blocked-name">{app.appName}</span>
                        <span className="onboarding-blocked-url">{app.browserUrl}</span>
                      </div>
                      <button className="onboarding-remove-btn" onClick={() => handleRemoveApp(idx)}>
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="onboarding-actions" style={{ marginTop: '24px' }}>
                <button className="btn btn-ghost" onClick={skipStep3} style={{ flex: 1 }}>
                  Skip for now
                </button>
                <button
                  className="btn btn-primary"
                  onClick={handleFinishStep3}
                  disabled={saving || blockedApps.length === 0}
                  style={{ flex: 2, background: 'linear-gradient(135deg, #e6c27a 0%, #ebd288 100%)' }}
                >
                  {saving ? 'Saving...' : 'Continue'}
                </button>
              </div>
            </>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <div className="onboarding-success">
              <div className="onboarding-success-icon">
                <Check size={36} color="#fff" strokeWidth={3} />
              </div>
              <h2>You're all set!</h2>
              <p>Your focus schedule is locked in. Distractions will be blocked during your set hours. Let's get to work.</p>
              <button
                className="btn btn-primary btn-block"
                onClick={() => navigate('/')}
                style={{ marginTop: 28, background: 'linear-gradient(135deg, #e6c27a 0%, #ebd288 100%)' }}
                id="onboard-go-dashboard"
              >
                Go to Dashboard
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
