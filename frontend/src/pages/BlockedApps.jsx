import { useState, useEffect } from 'react'
import { Plus, X, Globe, Shield } from 'lucide-react'
import client from '../api/client'
import PageHeader from '../components/PageHeader'

const SUGGESTIONS = [
  { appName: 'Instagram', browserUrl: 'instagram.com', icon: '📸' },
  { appName: 'Facebook', browserUrl: 'facebook.com', icon: '👤' },
  { appName: 'Twitter / X', browserUrl: 'x.com', icon: '🐦' },
  { appName: 'TikTok', browserUrl: 'tiktok.com', icon: '🎵' },
  { appName: 'Reddit', browserUrl: 'reddit.com', icon: '🔴' },
  { appName: 'YouTube', browserUrl: 'youtube.com', icon: '▶️' },
  { appName: 'Snapchat', browserUrl: 'snapchat.com', icon: '👻' },
  { appName: 'Pinterest', browserUrl: 'pinterest.com', icon: '📌' },
  { appName: 'LinkedIn', browserUrl: 'linkedin.com', icon: '💼' },
  { appName: 'Tumblr', browserUrl: 'tumblr.com', icon: '📝' },
  { appName: 'Discord', browserUrl: 'discord.com', icon: '🎮' },
  { appName: 'Twitch', browserUrl: 'twitch.tv', icon: '🟣' },
  { appName: 'WhatsApp Web', browserUrl: 'web.whatsapp.com', icon: '💬' },
  { appName: 'Telegram Web', browserUrl: 'web.telegram.org', icon: '✈️' },
  { appName: 'Netflix', browserUrl: 'netflix.com', icon: '🎬' },
  { appName: 'Amazon Prime', browserUrl: 'primevideo.com', icon: '🎥' },
  { appName: 'Hotstar', browserUrl: 'hotstar.com', icon: '⭐' },
  { appName: 'Spotify', browserUrl: 'open.spotify.com', icon: '🎧' },
]

export default function BlockedApps() {
  const [apps, setApps] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({ appName: '', browserUrl: '' })
  const [showForm, setShowForm] = useState(false)
  const [saving, setSaving] = useState(false)
  const [addingId, setAddingId] = useState(null)

  useEffect(() => { fetchApps() }, [])

  async function fetchApps() {
    try {
      const r = await client.get('/api/blocked-apps')
      setApps(r.data.apps || [])
    } catch (e) { console.error(e) }
    finally { setLoading(false) }
  }

  async function addApp() {
    if (!form.appName.trim()) return
    setSaving(true)
    try {
      await client.post('/api/blocked-apps', form)
      setForm({ appName: '', browserUrl: '' })
      setShowForm(false)
      fetchApps()
    } catch (e) { console.error(e) }
    finally { setSaving(false) }
  }

  async function quickAdd(suggestion) {
    setAddingId(suggestion.appName)
    try {
      await client.post('/api/blocked-apps', {
        appName: suggestion.appName,
        browserUrl: suggestion.browserUrl,
      })
      fetchApps()
    } catch (e) { console.error(e) }
    finally { setAddingId(null) }
  }

  async function toggleApp(id, current) {
    try {
      await client.patch(`/api/blocked-apps/${id}`, { isBlocked: !current })
      setApps(apps.map(a => a.id === id ? { ...a, isBlocked: !current } : a))
    } catch (e) { console.error(e) }
  }

  async function deleteApp(id) {
    try {
      await client.delete(`/api/blocked-apps/${id}`)
      setApps(apps.filter(a => a.id !== id))
    } catch (e) { console.error(e) }
  }

  // Which suggestions are already added
  const addedUrls = new Set(apps.map(a => (a.browserUrl || '').toLowerCase()))
  const remainingSuggestions = SUGGESTIONS.filter(
    s => !addedUrls.has(s.browserUrl.toLowerCase())
  )

  return (
    <div className="fade-up">
      <PageHeader
        title="Blocked Apps"
        subtitle={`${apps.filter(a => a.isBlocked).length} sites blocked`}
        action={
          <button id="add-app-btn" className="btn btn-primary" style={{ fontSize: 13 }}
            onClick={() => setShowForm(s => !s)}>
            {showForm ? 'Cancel' : '+ Add Site'}
          </button>
        }
      />

      {/* Custom add form */}
      {showForm && (
        <div className="card fade-up" style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>Add a custom site to block</h3>
          <div className="grid-2">
            <div className="input-group">
              <label className="input-label">App / Site Name *</label>
              <input id="app-name-input" className="input" placeholder="e.g. Instagram" value={form.appName}
                onChange={e => setForm(f => ({ ...f, appName: e.target.value }))} />
            </div>
            <div className="input-group">
              <label className="input-label">URL *</label>
              <input id="app-url-input" className="input" placeholder="e.g. instagram.com" value={form.browserUrl}
                onChange={e => setForm(f => ({ ...f, browserUrl: e.target.value }))} />
            </div>
          </div>
          <button id="save-app-btn" className="btn btn-primary" style={{ marginTop: 16 }} onClick={addApp} disabled={saving}>
            {saving ? 'Saving...' : 'Block This Site'}
          </button>
        </div>
      )}

      {/* Quick-add suggestions */}
      {!loading && remainingSuggestions.length > 0 && (
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <Shield size={16} color="var(--gold)" />
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-sub)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Popular Apps & Websites to Block
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10 }}>
            {remainingSuggestions.map(s => (
              <button
                key={s.appName}
                onClick={() => quickAdd(s)}
                disabled={addingId === s.appName}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: 12, padding: '12px 16px',
                  cursor: 'pointer', textAlign: 'left',
                  transition: 'all 0.2s', fontFamily: 'inherit',
                  opacity: addingId === s.appName ? 0.5 : 1,
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.background = 'rgba(230,194,122,0.06)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--card)' }}
              >
                <span style={{ fontSize: 22 }}>{s.icon}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>{s.appName}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 1 }}>{s.browserUrl}</div>
                </div>
                <Plus size={16} color="var(--gold)" style={{ flexShrink: 0 }} />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Blocked apps list */}
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 48 }}><div className="spinner" /></div>
      ) : apps.length === 0 ? (
        <div className="empty-state" style={{ marginTop: 16 }}>
          <div className="empty-state-icon">🚫</div>
          <h3>No blocked apps yet</h3>
          <p>Click any app above to instantly block it during focus sessions</p>
        </div>
      ) : (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <Globe size={16} color="var(--gold)" />
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-sub)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Your Blocked List ({apps.length})
            </span>
          </div>
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  {['Site Name', 'URL', 'Status', ''].map(h => (
                    <th key={h} style={{ padding: '12px 18px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {apps.map(app => (
                  <tr key={app.id} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '14px 18px', fontSize: 14, fontWeight: 600 }}>{app.appName}</td>
                    <td style={{ padding: '14px 18px', fontSize: 13, color: 'var(--text-muted)' }}>{app.browserUrl || '-'}</td>
                    <td style={{ padding: '14px 18px' }}>
                      <label className="toggle-wrap">
                        <input type="checkbox" checked={app.isBlocked} onChange={() => toggleApp(app.id, app.isBlocked)} />
                        <span className="toggle-slider" />
                      </label>
                    </td>
                    <td style={{ padding: '14px 18px' }}>
                      <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--red)', fontSize: 16, fontWeight: 700 }}
                        onClick={() => deleteApp(app.id)} aria-label="Delete" id={`delete-app-${app.id}`}>×</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
