import { useState, useEffect } from 'react'
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

export default function Dashboard() {
  const { user } = useAuth()
  const [stats, setStats] = useState({ todaySeconds: 0, streak: 0, blockedCount: 0, longestSession: 0, scheduledHoursPerDay: 8, breaksToday: 0, scheduleStart: '09:00', scheduleEnd: '17:00' })
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

  const [now, setNow] = useState(new Date())

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

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  // Calculate Focus Window Progress
  let pct = 0;
  let remainingSeconds = 0;
  let h2 = 0;
  let m2 = 0;
  let s2 = 0;

  if (stats.scheduleStart && stats.scheduleEnd) {
    const [sh, sm] = stats.scheduleStart.split(':').map(Number)
    const [eh, em] = stats.scheduleEnd.split(':').map(Number)
    
    const startTime = new Date(now)
    startTime.setHours(sh, sm, 0, 0)
    
    const endTime = new Date(now)
    endTime.setHours(eh, em, 0, 0)
    
    let totalDuration = (endTime - startTime) / 1000
    if (totalDuration <= 0) totalDuration = 24 * 3600 // Fallback if span goes across midnight
    
    let elapsed = (now - startTime) / 1000
    if (elapsed < 0) elapsed = 0
    if (elapsed > totalDuration) elapsed = totalDuration
    
    remainingSeconds = totalDuration - elapsed
    pct = (elapsed / totalDuration) * 100
    
    h2 = Math.floor(remainingSeconds / 3600)
    m2 = Math.floor((remainingSeconds % 3600) / 60)
    s2 = Math.floor(remainingSeconds % 60)
  }

  const timeText = h2 > 0 ? `${h2}h ${m2}m ${s2}s left` : `${m2}m ${s2}s left`
  const isDone = remainingSeconds === 0 && pct === 100
  
  const radius = 84;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (pct / 100) * circumference;

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
      let scheduleStart = '09:00'
      let scheduleEnd = '17:00'
      if (schedule && schedule.startTime && schedule.endTime) {
        scheduleStart = schedule.startTime
        scheduleEnd = schedule.endTime
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
        breaksToday,
        scheduleStart,
        scheduleEnd
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
  const weekNow = new Date()
  const dayOfWeek = weekNow.getDay()
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek
  const weekStart = new Date(weekNow)
  weekStart.setDate(weekNow.getDate() + mondayOffset)
  weekStart.setHours(0,0,0,0)

  const weekDays = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
  const weekData = weekDays.map((_, i) => {
    const dayStart = new Date(weekStart)
    dayStart.setDate(weekStart.getDate() + i)
    const dayEnd = new Date(dayStart)
    dayEnd.setDate(dayStart.getDate() + 1)
    
    const daySessions = allSessions.filter(s => new Date(s.startTime) >= dayStart && new Date(s.startTime) < dayEnd)
    
    let durationSeconds = daySessions.filter(s => s.status === 'COMPLETED').reduce((acc, s) => acc + (s.duration || 0), 0)
    // Add active session if it's today
    if (activeSession && new Date(activeSession.startTime) >= dayStart && new Date(activeSession.startTime) < dayEnd) {
      durationSeconds += sessionTimer
    }
    
    const hours = durationSeconds / 3600
    
    let breaks = daySessions.reduce((acc, s) => acc + (s.breaks?.length || 0), 0)
    if (dayStart.toDateString() === new Date().toDateString()) {
      breaks = stats.breaksToday
    }

    return { hours, durationSeconds, breaks }
  })

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
            <div className="dash-donut-wrap" style={{ position: 'relative', width: 240, height: 240 }}>
              <svg width="240" height="240" viewBox="0 0 240 240" style={{ transform: 'rotate(-90deg)' }}>
                {/* Background ring */}
                <circle cx="120" cy="120" r={radius} fill="none" stroke="#1e1e30" strokeWidth="20" />
                {/* Progress ring */}
                <circle 
                  cx="120" 
                  cy="120" 
                  r={radius} 
                  fill="none" 
                  stroke="#e6c27a" 
                  strokeWidth="20"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dashoffset 1s linear' }}
                />
              </svg>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 12, fontWeight: 500, color: '#4b5563', marginBottom: 4 }}>
                  Focus Today ({Math.round(pct)}%)
                </span>
                {isDone ? (
                  <span style={{ fontSize: 26, fontWeight: 800, color: '#22c55e' }}>Done for today</span>
                ) : (
                  <span style={{ fontSize: h2 > 0 ? 26 : 32, fontWeight: 800, color: '#fff' }}>
                    {timeText}
                  </span>
                )}
              </div>
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
              <p style={{ fontSize: 24, fontWeight: 900, letterSpacing: '-1px', fontVariantNumeric: 'tabular-nums' }}>{Math.round(stats.scheduledHoursPerDay)}h</p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '20px 10px' }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>Focus Today</p>
              <p style={{ fontSize: 24, fontWeight: 900, letterSpacing: '-1px', fontVariantNumeric: 'tabular-nums' }}>
                {formatDuration(stats.todaySeconds + (activeSession ? sessionTimer : 0))}
              </p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '20px 10px' }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>Breaks Today</p>
              <p style={{ fontSize: 24, fontWeight: 900, letterSpacing: '-1px', fontVariantNumeric: 'tabular-nums' }}>{stats.breaksToday}</p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '20px 10px' }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>Focus Score</p>
              <p style={{ fontSize: 24, fontWeight: 900, color: 'var(--gold)', letterSpacing: '-1px', fontVariantNumeric: 'tabular-nums' }}>
                {stats.breaksToday === 0 ? '∞' : (stats.scheduledHoursPerDay / stats.breaksToday).toFixed(1)}
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
              {weekDays.map((d, i) => {
                const heightPct = Math.min((weekData[i].hours / Math.max(stats.scheduledHoursPerDay, 1)) * 100, 100)
                
                return (
                  <div key={d} className="dash-bar-col">
                    <div className="dash-bar-tooltip">
                      {formatDuration(weekData[i].durationSeconds)} focus &middot; {weekData[i].breaks} break{weekData[i].breaks !== 1 ? 's' : ''}
                    </div>
                    <div className="dash-bar-track">
                      <div
                        className="dash-bar-fill"
                        style={{ height: `${heightPct}%`, minHeight: weekData[i].durationSeconds > 0 ? '6px' : '3px', opacity: weekData[i].durationSeconds > 0 ? 1 : 0.3 }}
                      />
                    </div>
                    <span className="dash-bar-label">{d}</span>
                  </div>
                )
              })}
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
