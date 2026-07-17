import { useState, useEffect } from 'react'
import client from '../api/client'
import PageHeader from '../components/PageHeader'

const THEME_PALETTES = {
  default: ['#e6c27a','#ebd288'],
  forest: ['#22c55e','#16a34a'],
  sunset: ['#f97316','#ef4444'],
  ocean: ['#0ea5e9','#6366f1'],
  midnight: ['#818cf8','#f3e5ab'],
  rose: ['#f472b6','#fb7185'],
}

export default function Themes() {
  const [themes, setThemes] = useState([])
  const [active, setActive] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      client.get('/api/themes'),
      client.get('/api/themes/active').catch(() => ({ data: null }))
    ]).then(([tr, ar]) => {
      setThemes(tr.data.themes || [])
      setActive(ar.data?.theme?.id || null)
    }).catch(console.error).finally(() => setLoading(false))
  }, [])

  async function selectTheme(id) {
    try {
      await client.post('/api/themes/select', { themeId: id })
      setActive(id)
    } catch (e) { console.error(e) }
  }

  return (
    <div className="fade-up">
      <PageHeader title="Themes" subtitle="Customize your experience" />

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 48 }}><div className="spinner" /></div>
      ) : themes.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🎨</div>
          <h3>No themes yet</h3>
          <p>Themes will appear here once added by admins</p>
        </div>
      ) : (
        <div className="grid-3">
          {themes.map(t => {
            const colors = THEME_PALETTES[t.name?.toLowerCase()] || THEME_PALETTES.default
            const isActive = active === t.id
            return (
              <button key={t.id} id={`theme-${t.id}`}
                onClick={() => selectTheme(t.id)}
                className="card"
                style={{
                  cursor: 'pointer', textAlign: 'center',
                  border: `1px solid ${isActive ? colors[0] : 'var(--border)'}`,
                  boxShadow: isActive ? `0 0 24px ${colors[0]}33` : 'none',
                  transform: isActive ? 'translateY(-2px)' : 'none',
                  transition: 'all 0.2s',
                  padding: 28,
                }}
              >
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
                  margin: '0 auto 14px',
                  boxShadow: `0 4px 20px ${colors[0]}55`,
                }} />
                <div style={{ fontSize: 15, fontWeight: 700 }}>{t.name}</div>
                {t.description && <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>{t.description}</div>}
                {isActive && <div style={{ marginTop: 10, fontSize: 11, fontWeight: 700, color: colors[0] }}>ACTIVE</div>}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
