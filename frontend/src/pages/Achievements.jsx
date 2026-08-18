import { useState, useEffect } from 'react'
import { Trophy, Lock } from 'lucide-react'
import client from '../api/client'
import PageHeader from '../components/PageHeader'

const TIER_COLORS = {
  'total_hours_100':   { color: '#CD7F32', bg: '#CD7F3215', label: 'Bronze',   hours: 100 },
  'total_hours_200':   { color: '#0F52BA', bg: '#0F52BA15', label: 'Sapphire', hours: 200 },
  'total_hours_300':   { color: '#50C878', bg: '#50C87815', label: 'Emerald',  hours: 300 },
  'total_hours_500':   { color: '#C0C0C0', bg: '#C0C0C015', label: 'Silver',   hours: 500 },
  'total_hours_1000':  { color: '#FFD700', bg: '#FFD70015', label: 'Gold',     hours: 1000 },
  'total_hours_2000':  { color: '#B9F2FF', bg: '#B9F2FF15', label: 'Diamond',  hours: 2000 },
  'total_hours_5000':  { color: '#E5E4E2', bg: '#E5E4E215', label: 'Platinum', hours: 5000 },
  'total_hours_10000': { color: '#e6c27a', bg: '#e6c27a15', label: 'Crown',    hours: 10000 },
  'total_hours_20000': { color: '#FFDF00', bg: '#FFDF0015', label: 'Star',     hours: 20000 },
}

export default function Achievements() {
  const [all, setAll] = useState([])
  const [unlocked, setUnlocked] = useState([])
  // Committed seconds (from completed sessions, stored in DB)
  const [committedSeconds, setCommittedSeconds] = useState(0)
  // Seconds elapsed in the currently-active session (live ticker)
  const [liveSeconds, setLiveSeconds] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      client.get('/api/achievements'),
      client.get('/api/achievements/me').catch(() => ({ data: { achievements: [] } })),
      client.get('/api/auth/me').catch(() => ({ data: { user: {} } })),
      client.get('/api/sessions?status=ACTIVE&limit=1').catch(() => ({ data: { sessions: [] } })),
    ]).then(([ar, ur, me, sr]) => {
      setAll(ar.data.achievements || [])
      setUnlocked((ur.data.achievements || []).map(a => a.achievementId || a.id))

      const committed = me.data?.user?.totalFocusSeconds || 0
      setCommittedSeconds(committed)

      // If there's an active session, compute how many live seconds it's been running
      const activeSession = (sr.data.sessions || [])[0]
      if (activeSession?.startTime) {
        const elapsed = Math.floor((Date.now() - new Date(activeSession.startTime).getTime()) / 1000)
        setLiveSeconds(Math.max(0, elapsed))
      }
    }).catch(console.error).finally(() => setLoading(false))
  }, [])

  // Tick the live session second-by-second
  useEffect(() => {
    if (liveSeconds === 0) return
    const id = setInterval(() => setLiveSeconds(s => s + 1), 1000)
    return () => clearInterval(id)
  }, [liveSeconds > 0])

  // Total seconds = committed (from DB) + live ticker (not double-counting; committed is only from COMPLETED sessions)
  const totalSeconds = committedSeconds + liveSeconds
  const totalHours = totalSeconds / 3600

  // Header label: decimal hours
  const totalHoursLabel = totalHours >= 10
    ? totalHours.toFixed(1)
    : totalHours.toFixed(2).replace(/\.?0+$/, '') || '0'

  // Per-achievement label: whole hours
  const floorHours = Math.floor(totalHours)

  const count = unlocked.length
  const total = all.length

  const sorted = [...all].sort((a, b) => {
    const ha = TIER_COLORS[a.condition]?.hours || 0
    const hb = TIER_COLORS[b.condition]?.hours || 0
    return ha - hb
  })

  return (
    <div className="fade-up">
      <PageHeader title="Achievements" subtitle={`${count} / ${total} unlocked`} />

      {/* Overall journey bar */}
      <div className="card" style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
          <span style={{ fontSize: 14, fontWeight: 600 }}>Your Focus Journey</span>
          <span style={{
            fontSize: 14, fontWeight: 800, color: 'var(--gold)',
            fontVariantNumeric: 'tabular-nums',
          }}>
            {totalHoursLabel} hrs total
          </span>
        </div>
        <div style={{ height: 8, background: 'var(--border)', borderRadius: 99, overflow: 'hidden' }}>
          <div style={{
            height: '100%',
            borderRadius: 99,
            background: 'linear-gradient(90deg, #CD7F32, #FFD700, #B9F2FF)',
            width: `${Math.min((totalHours / 1000) * 100, 100)}%`,
            transition: 'width 1s ease',
          }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 11, color: 'var(--text-muted)' }}>
          <span>0 hrs</span>
          <span>1,000 hrs</span>
        </div>
      </div>

      {loading ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, padding: 64 }}>
          <div className="spinner" style={{ width: 28, height: 28 }} />
          <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>Loading achievements…</p>
        </div>
      ) : sorted.length === 0 ? (
        <div className="empty-state">
          <div style={{ marginBottom: 16 }}><Trophy size={48} color="var(--text-muted)" /></div>
          <h3>No achievements yet</h3>
          <p>Your milestones will appear here as you focus more</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {sorted.map(a => {
            const isUnlocked = unlocked.includes(a.id)
            const tier = TIER_COLORS[a.condition] || { color: '#9ca3af', bg: '#9ca3af15', label: '???', hours: 0 }
            const progress = Math.min((totalHours / tier.hours) * 100, 100)

            return (
              <div
                key={a.id}
                id={`achievement-${a.id}`}
                className="card"
                style={{
                  display: 'flex', alignItems: 'center', gap: 20, padding: '20px 24px',
                  opacity: isUnlocked ? 1 : 0.55,
                  border: isUnlocked ? `1px solid ${tier.color}44` : undefined,
                  boxShadow: isUnlocked ? `0 0 20px ${tier.color}15` : 'none',
                  transition: 'all 0.4s ease',
                }}
              >
                {/* Icon circle */}
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: tier.bg,
                  border: `2px solid ${isUnlocked ? tier.color : 'var(--border)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, transition: 'border-color 0.4s ease',
                }}>
                  {isUnlocked
                    ? <span style={{ fontSize: 24 }}>{a.icon || '🏆'}</span>
                    : <Lock size={20} color="var(--text-muted)" />
                  }
                </div>

                {/* Name + progress */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: 15, fontWeight: 700 }}>{a.name}</span>
                    <span style={{
                      fontSize: 10, fontWeight: 800, padding: '2px 8px', borderRadius: 12,
                      background: tier.bg, color: tier.color, letterSpacing: '0.05em',
                    }}>
                      {tier.label.toUpperCase()}
                    </span>
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--text-sub)', marginBottom: 8 }}>{a.description}</div>

                  {/* Progress bar — shown for all (locked dimmed, unlocked at 100%) */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ flex: 1, height: 4, background: 'var(--border)', borderRadius: 99, overflow: 'hidden' }}>
                      <div style={{
                        height: '100%', borderRadius: 99, background: tier.color,
                        width: `${isUnlocked ? 100 : progress}%`,
                        transition: 'width 0.8s ease',
                      }} />
                    </div>
                    <span style={{
                      fontSize: 11, color: isUnlocked ? tier.color : 'var(--text-muted)',
                      fontWeight: 700, whiteSpace: 'nowrap',
                      fontVariantNumeric: 'tabular-nums',
                    }}>
                      {isUnlocked
                        ? `✓ ${tier.hours.toLocaleString()} hrs`
                        : `${floorHours} / ${tier.hours.toLocaleString()} hrs`
                      }
                    </span>
                  </div>
                </div>

                {/* Status badge */}
                <div style={{ flexShrink: 0 }}>
                  {isUnlocked ? (
                    <span className="badge badge-gold" style={{ background: `${tier.color}20`, color: tier.color }}>
                      Unlocked
                    </span>
                  ) : (
                    <span className="badge" style={{ background: 'var(--surface)', color: 'var(--text-muted)' }}>
                      {tier.hours.toLocaleString()} hrs
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
