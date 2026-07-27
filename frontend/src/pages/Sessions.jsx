import { useState, useEffect } from 'react'
import client from '../api/client'
import PageHeader from '../components/PageHeader'

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' })
}

function formatTime(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
}

function formatDuration(secs) {
  if (!secs) return '-'
  const h = Math.floor(secs / 3600)
  const m = Math.floor((secs % 3600) / 60)
  if (h > 0) return `${h}h ${m}m`
  return `${m}m`
}

const STATUS_STYLES = {
  COMPLETED: { class: 'badge-green', label: 'Done' },
  ACTIVE: { class: 'badge-gold', label: 'Active' },
  ABANDONED: { class: 'badge-red', label: 'Stopped' },
}

export default function Sessions() {
  const [sessions, setSessions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.get('/api/sessions')
      .then(r => setSessions(r.data.sessions || []))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const totalTime = sessions
    .filter(s => s.status === 'COMPLETED')
    .reduce((a, s) => a + (s.duration || 0), 0)

  const h = Math.floor(totalTime / 3600)
  const m = Math.floor((totalTime % 3600) / 60)

  // Calculate daily scores for last 7 days
  const last7Days = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - (6 - i))
    d.setHours(0,0,0,0)
    return d
  })

  const dailyScores = last7Days.map(date => {
    const nextDate = new Date(date)
    nextDate.setDate(nextDate.getDate() + 1)
    
    const daySessions = sessions.filter(s => new Date(s.startTime) >= date && new Date(s.startTime) < nextDate)
    
    const focusSeconds = daySessions.filter(s => s.status === 'COMPLETED').reduce((acc, s) => acc + (s.duration || 0), 0)
    const focusHours = (focusSeconds / 3600)
    const breaks = daySessions.reduce((acc, s) => acc + (s.breaks?.length || 0), 0)
    
    const score = focusHours / Math.max(breaks, 1)
    
    return {
      date,
      dayName: date.toLocaleDateString('en-IN', { weekday: 'short' }),
      focusHours,
      breaks,
      score: parseFloat(score.toFixed(1))
    }
  }).reverse()

  const maxScore = Math.max(...dailyScores.map(d => d.score), 1)

  return (
    <div className="fade-up">
      <PageHeader title="Sessions" subtitle="Your focus history" />

      {/* Summary cards */}
      <div className="grid-3" style={{ marginBottom: 24 }}>
        <div className="card" style={{ textAlign: 'center', padding: 20 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Total Focus Time</p>
          <p style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-1px' }}>{h}h {m}m</p>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: 20 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Sessions Completed</p>
          <p style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-1px' }}>{sessions.filter(s => s.status === 'COMPLETED').length}</p>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: 20 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Average Session</p>
          <p style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-1px' }}>
            {sessions.filter(s => s.status === 'COMPLETED').length > 0
              ? formatDuration(Math.round(totalTime / sessions.filter(s => s.status === 'COMPLETED').length))
              : '-'
            }
          </p>
        </div>
      </div>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 48 }}><div className="spinner" /></div>
      ) : sessions.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🎯</div>
          <h3>No sessions yet</h3>
          <p>Start your first focus session from the Dashboard</p>
        </div>
      ) : (
        <>
          <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Daily Focus Scores (Last 7 Days)</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
            {dailyScores.map((day, i) => (
              <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', padding: '16px 20px' }}>
                <div style={{ width: 60, fontWeight: 700 }}>{day.dayName}</div>
                <div style={{ flex: 1, padding: '0 16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--text-sub)', marginBottom: 6 }}>
                    <span>{formatDuration(day.focusHours * 3600)} Focus · {day.breaks} Breaks</span>
                    <span style={{ color: 'var(--gold)', fontWeight: 700 }}>{day.score} Score</span>
                  </div>
                  <div style={{ height: 6, background: 'var(--surface)', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ height: '100%', background: 'var(--gold)', width: `${(day.score / maxScore) * 100}%`, borderRadius: 3 }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Recent Sessions</h3>
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                {['Date', 'Time', 'Duration', 'Status'].map(h => (
                  <th key={h} style={{ padding: '12px 18px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sessions.map(s => {
                const st = STATUS_STYLES[s.status] || STATUS_STYLES.COMPLETED
                return (
                  <tr key={s.id} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '14px 18px', fontSize: 14, fontWeight: 600 }}>{formatDate(s.startTime)}</td>
                    <td style={{ padding: '14px 18px', fontSize: 13, color: 'var(--text-sub)' }}>{formatTime(s.startTime)}</td>
                    <td style={{ padding: '14px 18px', fontSize: 15, fontWeight: 700, color: 'var(--gold)' }}>{formatDuration(s.duration)}</td>
                    <td style={{ padding: '14px 18px' }}><span className={`badge ${st.class}`}>{st.label}</span></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        </>
      )}
    </div>
  )
}
