import { useState, useEffect } from 'react'
import client from '../api/client'
import PageHeader from '../components/PageHeader'

export default function YouTube() {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({ url: '', title: '' })
  const [showDrawer, setShowDrawer] = useState(false)
  const [saving, setSaving] = useState(false)

  useEffect(() => { fetchList() }, [])

  async function fetchList() {
    try {
      const r = await client.get('/api/youtube-allowlist')
      setList(r.data.allowlist || [])
    } catch (e) { console.error(e) }
    finally { setLoading(false) }
  }

  function extractVideoId(url) {
    try {
      const u = new URL(url.startsWith('http') ? url : 'https://' + url)
      return u.searchParams.get('v') || u.pathname.split('/').pop()
    } catch { return '' }
  }

  async function addVideo() {
    if (!form.url.trim()) return
    setSaving(true)
    try {
      const videoId = extractVideoId(form.url)
      await client.post('/api/youtube-allowlist', { url: form.url, videoId, title: form.title || 'Untitled' })
      setForm({ url: '', title: '' })
      setShowDrawer(false)
      fetchList()
    } catch (e) { console.error(e) }
    finally { setSaving(false) }
  }

  async function removeVideo(id) {
    try {
      await client.delete(`/api/youtube-allowlist/${id}`)
      setList(list.filter(v => v.id !== id))
    } catch (e) { console.error(e) }
  }

  return (
    <div className="fade-up">
      <PageHeader
        title="YouTube Allowlist"
        subtitle="Videos you can watch during focus"
        action={
          <button id="add-yt-btn" className="btn btn-primary" style={{ fontSize: 13 }}
            onClick={() => setShowDrawer(true)}>+ Add Video</button>
        }
      />

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 48 }}><div className="spinner" /></div>
      ) : list.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">▶️</div>
          <h3>No videos allowlisted</h3>
          <p>Add YouTube videos you want to access during focus sessions</p>
        </div>
      ) : (
        <div className="grid-3">
          {list.map(v => (
            <div key={v.id} className="card" style={{ padding: 0, overflow: 'hidden' }}>
              {v.videoId && (
                <img src={`https://img.youtube.com/vi/${v.videoId}/mqdefault.jpg`} alt={v.title}
                  style={{ width: '100%', height: 140, objectFit: 'cover' }} />
              )}
              <div style={{ padding: 16 }}>
                <div style={{ fontSize: 14, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {v.title || 'Untitled'}
                </div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>ID: {v.videoId}</div>
                <button
                  className="btn btn-danger" style={{ marginTop: 12, padding: '6px 14px', fontSize: 12, width: '100%' }}
                  onClick={() => removeVideo(v.id)} id={`remove-yt-${v.id}`}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showDrawer && (
        <>
          <div className="drawer-overlay" onClick={() => setShowDrawer(false)} />
          <div className="drawer">
            <div className="drawer-header">
              <h2 className="drawer-title">Add Video</h2>
              <button className="drawer-close" onClick={() => setShowDrawer(false)}>×</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div className="input-group">
                <label className="input-label">YouTube URL *</label>
                <input id="yt-url-input" className="input" placeholder="https://youtube.com/watch?v=..."
                  value={form.url} onChange={e => setForm(f => ({ ...f, url: e.target.value }))} />
              </div>
              <div className="input-group">
                <label className="input-label">Title (optional)</label>
                <input id="yt-title-input" className="input" placeholder="Lo-fi study mix"
                  value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
              </div>
              <button id="save-yt-btn" className="btn btn-primary btn-block" onClick={addVideo} disabled={saving}
                style={{ background: 'linear-gradient(135deg, #e6c27a 0%, #ebd288 100%)' }}>
                {saving ? 'Saving...' : 'Add to Allowlist'}
              </button>
              <button className="btn btn-ghost btn-block" onClick={() => setShowDrawer(false)}>Cancel</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
