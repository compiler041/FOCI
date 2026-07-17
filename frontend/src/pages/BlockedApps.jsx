import { useState, useEffect } from 'react'
import client from '../api/client'
import PageHeader from '../components/PageHeader'

export default function BlockedApps() {
  const [apps, setApps] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({ appName: '', browserUrl: '' })
  const [showForm, setShowForm] = useState(false)
  const [saving, setSaving] = useState(false)

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

      {showForm && (
        <div className="card fade-up" style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>Add a site to block</h3>
          <div className="grid-2">
            <div className="input-group">
              <label className="input-label">App / Site Name *</label>
              <input id="app-name-input" className="input" placeholder="e.g. Instagram" value={form.appName}
                onChange={e => setForm(f => ({ ...f, appName: e.target.value }))} />
            </div>
            <div className="input-group">
              <label className="input-label">URL (optional)</label>
              <input id="app-url-input" className="input" placeholder="e.g. instagram.com" value={form.browserUrl}
                onChange={e => setForm(f => ({ ...f, browserUrl: e.target.value }))} />
            </div>
          </div>
          <button id="save-app-btn" className="btn btn-primary" style={{ marginTop: 16 }} onClick={addApp} disabled={saving}>
            {saving ? 'Saving...' : 'Block This Site'}
          </button>
        </div>
      )}

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 48 }}><div className="spinner" /></div>
      ) : apps.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🚫</div>
          <h3>No blocked apps yet</h3>
          <p>Add websites to block them during focus sessions</p>
        </div>
      ) : (
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
      )}
    </div>
  )
}
