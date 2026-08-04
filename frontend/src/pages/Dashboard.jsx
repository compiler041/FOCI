import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../context/AuthContext'
import client from '../api/client'
import PremiumCard from '../components/PremiumCard'
import BreakWall from '../components/BreakWall'
import './Dashboard.css'

function formatDuration(seconds) {
  if (!seconds) return '0m'
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  if (h > 0) return `${h}h ${m}m`
  return `${m}m`
}

function formatTimer(seconds) {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  if (h > 0) return `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`
  return `${m}:${String(s).padStart(2,'0')}`
}

export default function Dashboard() {
  const { user } = useAuth()
  const [stats, setStats] = useState({ todaySeconds: 0, streak: 0, blockedCount: 0, longestSession: 0, scheduledHoursPerDay: 8, breaksToday: 0 })
  const [sessions, setSessions] = useState([])
  const [allSessions, setAllSessions] = useState([])
  const [activeSession, setActiveSession] = useState(null)
  const [sessionTimer, setSessionTimer] = useState(0)
  const [loading, setLoading] = useState(true)
  const [starting, setStarting] = useState(false)
  const [showDrawer, setShowDrawer] = useState(false)
  const [focusDuration, setFocusDuration] = useState(90)
  const [showBreakWall, setShowBreakWall] = useState(false)
  const [breakAdDuration, setBreakAdDuration] = useState(15)
  const canvasRef = useRef(null)

  const focusScore = Math.min(10, (stats.todaySeconds / (8 * 3600)) * 10)

  useEffect(() => { fetchDashboardData() }, [])

  useEffect(() => {
    if (!activeSession) return
    const startTime = new Date(activeSession.startTime).getTime()
    const tick = () => setSessionTimer(Math.floor((Date.now() - startTime) / 1000))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [activeSession])

  // Draw donut chart
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const w = canvas.width = 240
    const h = canvas.height = 240
    const cx = w / 2, cy = h / 2, r = 84, lw = 20

    ctx.clearRect(0, 0, w, h)

    // Background ring
    ctx.beginPath()
    ctx.arc(cx, cy, r, 0, Math.PI * 2)
    ctx.strokeStyle = '#1e1e30'
    ctx.lineWidth = lw
    ctx.stroke()

    // Deep focus portion (gold)
    const currentTotal = stats.todaySeconds + (activeSession ? sessionTimer : 0)
    const deepRatio = Math.min(currentTotal / (stats.scheduledHoursPerDay * 3600), 1)
    if (deepRatio > 0) {
      const startA = -Math.PI / 2
      const endA = startA + deepRatio * Math.PI * 2
      ctx.beginPath()
      ctx.arc(cx, cy, r, startA, endA)
      ctx.strokeStyle = '#e6c27a'
      ctx.lineWidth = lw
      ctx.lineCap = 'round'
      ctx.stroke()
    }

    // Light work (green, smaller portion)
    const lightRatio = deepRatio * 0.3
    if (lightRatio > 0 && deepRatio < 1) {
      const startA = -Math.PI / 2 + deepRatio * Math.PI * 2
      const endA = startA + lightRatio * Math.PI * 2
      ctx.beginPath()
      ctx.arc(cx, cy, r, startA, Math.min(endA, Math.PI * 1.5))
      ctx.strokeStyle = '#22c55e'
      ctx.lineWidth = lw
      ctx.lineCap = 'round'
      ctx.stroke()
    }

    // Center text
    ctx.textAlign = 'center'
    ctx.fillStyle = '#4b5563'
    ctx.font = '500 12px Inter, sans-serif'
    const pct = Math.round((currentTotal / (stats.scheduledHoursPerDay * 3600)) * 100) || 0
    ctx.fillText(`Focus Today (${pct}%)`, cx, cy - 24)
    const remainingSeconds = Math.max((stats.scheduledHoursPerDay * 3600) - currentTotal, 0)
    const h2 = Math.floor(remainingSeconds / 3600)
    const m2 = Math.floor((remainingSeconds % 3600) / 60)
    const s2 = remainingSeconds % 60
    ctx.fillStyle = '#ffffff'
    
    let timeText = ''
    
    if (h2 > 0) {
      ctx.font = '800 26px Inter, sans-serif'
      timeText = `${h2}h ${m2}m ${s2}s left`
    } else {
      ctx.font = '800 32px Inter, sans-serif'
      timeText = `${m2}m ${s2}s left`
    }
    
    ctx.fillText(timeText, cx, cy + 14)
  }, [stats, activeSession, sessionTimer])

  async function fetchDashboardData() {
    try {
      const [sessionsRes, blockedRes, schedulesRes, breaksRes] = await Promise.all([
        client.get('/api/sessions'),
        client.get('/api/blocked-apps'),
        client.get('/api/schedules').catch(() => ({ data: { schedules: [] } })),
        client.get('/api/breaks/today').catch(() => ({ data: { count: 0 } }))
      ])
      const allSessionsList = sessionsRes.data.sessions || []
      setAllSessions(allSessionsList)
      setSessions(allSessionsList.slice(0, 5))

      const active = allSessionsList.find(s => s.status === 'ACTIVE')
      setActiveSession(active || null)

      const schedule = schedulesRes.data?.schedules?.find(s => s.isActive)
      let scheduledHoursPerDay = 8
      if (schedule && schedule.startTime && schedule.endTime) {
        const [sh, sm] = schedule.startTime.split(':').map(Number)
        const [eh, em] = schedule.endTime.split(':').map(Number)
        scheduledHoursPerDay = (eh + em/60) - (sh + sm/60)
        if (scheduledHoursPerDay < 0) scheduledHoursPerDay += 24
      }

      const today = new Date(); today.setHours(0,0,0,0)
      const todaySessions = allSessionsList.filter(s => new Date(s.startTime) >= today)
      
      const todaySeconds = todaySessions
        .filter(s => s.status === 'COMPLETED')
        .reduce((acc, s) => acc + (s.duration || 0), 0)
        
      const inSessionBreaks = todaySessions.reduce((acc, s) => acc + (s.breaks?.length || 0), 0)
      const breaksToday = (breaksRes.data?.count || 0) + inSessionBreaks

      const completedDays = new Set(
        allSessions.filter(s => s.status === 'COMPLETED').map(s => new Date(s.startTime).toDateString())
      )
      let streak = 0
      let checkDate = new Date()
      while (completedDays.has(checkDate.toDateString())) {
        streak++
        checkDate.setDate(checkDate.getDate() - 1)
      }

      const longest = allSessions
        .filter(s => s.status === 'COMPLETED')
        .reduce((max, s) => Math.max(max, s.duration || 0), 0)

      setStats({
        todaySeconds,
        streak,
        blockedCount: (blockedRes.data.apps || []).filter(a => a.isBlocked).length,
        longestSession: longest,
        scheduledHoursPerDay,
        breaksToday
      })
    } catch (e) { console.error(e) }
    finally { setLoading(false) }
  }

  async function startSession() {
    setStarting(true)
    try {
      const res = await client.post('/api/sessions/start')
      setActiveSession(res.data.session)
      setShowDrawer(false)
    } catch (e) { console.error(e) }
    finally { setStarting(false) }
  }

  async function endSession() {
    if (!activeSession) return
    try {
      await client.patch(`/api/sessions/${activeSession.id}/end`)
      setActiveSession(null)
      fetchDashboardData()
    } catch (e) { console.error(e) }
  }

  async function handleTakeBreak() {
    if (!activeSession) return
    try {
      const res = await client.post(`/api/sessions/${activeSession.id}/break`)
      setBreakAdDuration(res.data.adDuration || 15)
      setShowBreakWall(true)
    } catch (e) { console.error(e) }
  }

  // Get start of current week (Monday)
  const now = new Date()
  const dayOfWeek = now.getDay()
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek
  const weekStart = new Date(now)
  weekStart.setDate(now.getDate() + mondayOffset)
  weekStart.setHours(0,0,0,0)

  const weekDays = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
  const weekData = weekDays.map((_, i) => {
    const dayStart = new Date(weekStart)
    dayStart.setDate(weekStart.getDate() + i)
    const dayEnd = new Date(dayStart)
    dayEnd.setDate(dayStart.getDate() + 1)
    
    const daySessions = allSessions.filter(s => new Date(s.startTime) >= dayStart && new Date(s.startTime) < dayEnd)
    const duration = daySessions.filter(s => s.status === 'COMPLETED').reduce((acc, s) => acc + (s.duration || 0), 0) / 3600
    const breaks = daySessions.reduce((acc, s) => acc + (s.breaks?.length || 0), 0)
    const score = breaks === 0 && duration > 0 ? '∞' : (duration / Math.max(breaks, 1))
    
    return { hours: duration, score: score === '∞' ? '∞' : parseFloat(score.toFixed(1)) }
  })
  const maxWeek = Math.max(...weekData.map(d => d.hours), 1)

  return (
    <div className="dashboard fade-up">
      {stats && stats.blockedCount === 0 && (
        <div style={{ background: 'var(--card)', border: '1px solid var(--gold)', borderRadius: 12, padding: '16px 20px', marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--gold)', marginBottom: 4 }}>You are vulnerable to distractions</h3>
            <p style={{ fontSize: 13, color: 'var(--text-sub)' }}>You haven't blocked any apps yet. Social media will continue to control you until you block it.</p>
          </div>
          <button className="btn btn-primary" onClick={() => window.location.href = '/blocked'} style={{ background: 'var(--gold)', color: '#000', border: 'none', fontWeight: 800 }}>
            Block Apps Now
          </button>
        </div>
      )}

      {/* Top row */}
      <div className="dash-top-row">
        <h1 className="dash-title">Dashboard</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 13, color: 'var(--text-sub)' }}>Analytics</span>
          {activeSession && (
            <button
              className="btn btn-ghost"
              style={{ padding: '10px 20px', fontSize: 13, border: '1px solid var(--border)' }}
              onClick={handleTakeBreak}
              id="take-break-btn"
            >
              Take Break
            </button>
          )}
          <button
            className="btn btn-primary"
            style={{ padding: '10px 20px', fontSize: 13 }}
            onClick={() => activeSession ? endSession() : setShowDrawer(true)}
            id="start-session-btn"
          >
            {activeSession ? 'End Session' : 'Start New Session'}
          </button>
        </div>
      </div>

      {/* Main grid */}
      <div className="dash-grid">
        {/* Left column — Core Metric */}
        <div className="dash-left">
          <div className="card dash-core-card">
            <h3 className="dash-card-title">Core Metric</h3>
            <div className="dash-donut-wrap">
              <canvas ref={canvasRef} style={{ width: 240, height: 240 }} />
            </div>
            {/* Legend */}
            <div className="dash-legend">
              <span className="dash-legend-item">
                <span className="dash-legend-dot" style={{ background: '#e6c27a' }} />
                Deep Focus
              </span>
              <span className="dash-legend-item">
                <span className="dash-legend-dot" style={{ background: '#22c55e' }} />
                Light Work
              </span>
            </div>
          </div>

          {/* Stats row below donut */}
          <div className="grid-2" style={{ marginTop: 16, gap: 12 }}>
            <div className="card" style={{ textAlign: 'center', padding: '20px 10px' }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>Daily Schedule</p>
              <p style={{ fontSize: 24, fontWeight: 900, letterSpacing: '-1px' }}>{Math.round(stats.scheduledHoursPerDay)}h</p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '20px 10px' }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>Focus Today</p>
              <p style={{ fontSize: 24, fontWeight: 900, letterSpacing: '-1px' }}>{formatDuration(stats.todaySeconds)}</p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '20px 10px' }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>Breaks Today</p>
              <p style={{ fontSize: 24, fontWeight: 900, letterSpacing: '-1px' }}>{stats.breaksToday}</p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '20px 10px' }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>Focus Score</p>
              <p style={{ fontSize: 24, fontWeight: 900, color: 'var(--gold)', letterSpacing: '-1px' }}>
                {stats.breaksToday === 0 && stats.todaySeconds > 0 ? '∞' : (stats.todaySeconds / 3600 / Math.max(stats.breaksToday, 1)).toFixed(1)}
              </p>
            </div>
          </div>
        </div>

        {/* Right column — Weekly Overview + Recent Sessions */}
        <div className="dash-right">
          {/* Weekly Overview bar chart */}
          <div className="card dash-weekly-card">
            <h3 className="dash-card-title">Weekly Overview</h3>
            <div className="dash-bar-chart">
              {weekDays.map((d, i) => (
                <div key={d} className="dash-bar-col">
                  <span style={{ fontSize: 10, color: 'var(--gold)', fontWeight: 700, marginBottom: 4 }}>{weekData[i].score > 0 ? weekData[i].score : ''}</span>
                  <div className="dash-bar-track">
                    <div
                      className="dash-bar-fill"
                      style={{ height: `${(weekData[i].hours / maxWeek) * 100}%` }}
                    />
                  </div>
                  <span className="dash-bar-label">{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Sessions */}
          <div className="card dash-recent-card">
            <h3 className="dash-card-title">Recent Sessions</h3>
            {sessions.length === 0 ? (
              <p style={{ fontSize: 13, color: 'var(--text-muted)', padding: '16px 0' }}>No sessions yet. Start your first one!</p>
            ) : (
              <div className="dash-session-list">
                {sessions.map(s => (
                  <div key={s.id} className="dash-session-row">
                    <div style={{ flex: 1 }}>
                      <span style={{ fontWeight: 600, fontSize: 14 }}>{formatDuration(s.duration)}</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: 12, marginLeft: 8 }}>
                        {s.status === 'COMPLETED' ? 'Deep Work' : s.status}
                      </span>
                    </div>
                    <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                      {new Date(s.startTime).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
                      {' · '}
                      {new Date(s.startTime).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {!user?.isPremium && <PremiumCard />}

      {showBreakWall && (
        <BreakWall 
          adDuration={breakAdDuration} 
          strictnessLevel={user?.strictnessLevel || 1}
          onComplete={() => setShowBreakWall(false)} 
        />
      )}

      {/* Session config drawer */}
      {showDrawer && (
        <>
          <div className="drawer-overlay" onClick={() => setShowDrawer(false)} />
          <div className="drawer">
            <div className="drawer-header">
              <h2 className="drawer-title">Configure Session</h2>
              <button className="drawer-close" onClick={() => setShowDrawer(false)}>×</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div className="input-group">
                <label className="input-label">Set Focus Timer</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <input
                    type="range"
                    min={15}
                    max={180}
                    step={15}
                    value={focusDuration}
                    onChange={e => setFocusDuration(Number(e.target.value))}
                    style={{ flex: 1, accentColor: 'var(--gold)' }}
                  />
                  <span style={{ fontSize: 20, fontWeight: 800, minWidth: 60, textAlign: 'right' }}>{focusDuration} min</span>
                </div>
              </div>

              <div className="input-group">
                <label className="input-label">Select Blocklist</label>
                <div className="card-sm">
                  <div style={{ fontSize: 14, fontWeight: 600 }}>Deep Work (BASIC)</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>Blocks all distracting sites</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
                <button
                  className="btn btn-primary btn-block"
                  onClick={startSession}
                  disabled={starting}
                  id="confirm-start-session"
                  style={{ background: 'linear-gradient(135deg, #e6c27a 0%, #ebd288 100%)' }}
                >
                  {starting ? 'Starting...' : `Start ${focusDuration}m Session`}
                </button>
              </div>
              <button className="btn btn-ghost btn-block" onClick={() => setShowDrawer(false)}>Cancel</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
