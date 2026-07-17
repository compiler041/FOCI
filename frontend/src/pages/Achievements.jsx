import { useState, useEffect } from 'react'
import client from '../api/client'
import PageHeader from '../components/PageHeader'

export default function Achievements() {
  const [all, setAll] = useState([])
  const [unlocked, setUnlocked] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      client.get('/api/achievements'),
      client.get('/api/achievements/user').catch(() => ({ data: { achievements: [] } }))
    ]).then(([ar, ur]) => {
      setAll(ar.data.achievements || [])
      setUnlocked((ur.data.achievements || []).map(a => a.achievementId || a.id))
    }).catch(console.error).finally(() => setLoading(false))
  }, [])

  const count = unlocked.length
  const total = all.length

  return (
    <div className="fade-up">
      <PageHeader title="Achievements" subtitle={`${count} / ${total} unlocked`} />

      {/* Progress bar */}
      <div className="card" style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
          <span style={{ fontSize: 14, fontWeight: 600 }}>Overall Progress</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--gold)' }}>{total > 0 ? Math.round(count/total*100) : 0}%</span>
        </div>
        <div style={{ height: 8, background: 'var(--border)', borderRadius: 99, overflow: 'hidden' }}>
          <div style={{ height: '100%', borderRadius: 99, background: 'linear-gradient(90deg, var(--gold), var(--tan))', width: `${total > 0 ? (count/total*100) : 0}%`, transition: 'width 1s ease' }} />
        </div>
      </div>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 48 }}><div className="spinner" /></div>
      ) : all.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🏆</div>
          <h3>No achievements yet</h3>
          <p>Achievements will appear here once available</p>
        </div>
      ) : (
        <div className="grid-3">
          {all.map(a => {
            const isUnlocked = unlocked.includes(a.id)
            return (
              <div key={a.id} id={`achievement-${a.id}`} className="card" style={{
                textAlign: 'center', padding: 24,
                opacity: isUnlocked ? 1 : 0.4,
                border: isUnlocked ? '1px solid rgba(124,106,247,0.3)' : undefined,
                boxShadow: isUnlocked ? '0 0 20px rgba(124,106,247,0.1)' : 'none',
              }}>
                <span style={{ fontSize: 40, display: 'block', marginBottom: 12 }}>{a.icon || (isUnlocked ? '🏆' : '🔒')}</span>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{a.name}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{a.description}</div>
                {isUnlocked && <div style={{ marginTop: 10 }}><span className="badge badge-gold">✓ Unlocked</span></div>}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
