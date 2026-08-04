import { useState, useEffect } from 'react'
import { ListVideo, Play, Trash2, Plus, Link } from 'lucide-react'
import client from '../api/client'
import PageHeader from '../components/PageHeader'

export default function YouTube() {
  const [videos, setVideos] = useState([])
  const [playlists, setPlaylists] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({ url: '', title: '' })
  const [showDrawer, setShowDrawer] = useState(false)
  const [saving, setSaving] = useState(false)
  const [tab, setTab] = useState('videos') // 'videos' | 'playlists'

  useEffect(() => { fetchList() }, [])

  async function fetchList() {
    try {
      const r = await client.get('/api/youtube-allowlist')
      setVideos(r.data.allowlist || [])
      setPlaylists(r.data.playlists || [])
    } catch (e) { console.error(e) }
    finally { setLoading(false) }
  }

  function detectUrlType(url) {
    try {
      const u = new URL(url.startsWith('http') ? url : 'https://' + url)
      const hasVideo = !!u.searchParams.get('v')
      const hasList = !!u.searchParams.get('list')
      if (hasList && !hasVideo) return 'playlist'
      return 'video'
    } catch { return 'video' }
  }

  async function addItem() {
    if (!form.url.trim()) return
    setSaving(true)
    try {
      await client.post('/api/youtube-allowlist', {
        url: form.url.startsWith('http') ? form.url : 'https://' + form.url,
        title: form.title || 'Untitled'
      })
      setForm({ url: '', title: '' })
      setShowDrawer(false)
      fetchList()
    } catch (e) {
      console.error(e)
      if (e.response?.status === 409) {
        alert('This is already in your allowlist')
      }
    }
    finally { setSaving(false) }
  }

  async function removeItem(id) {
    try {
      await client.delete(`/api/youtube-allowlist/${id}`)
      setVideos(prev => prev.filter(v => v.id !== id))
      setPlaylists(prev => prev.filter(p => p.id !== id))
    } catch (e) { console.error(e) }
  }

  const urlType = detectUrlType(form.url)

  return (
    <div className="fade-up">
      <PageHeader
        title="YouTube Allowlist"
        subtitle="Videos & playlists you can watch during focus"
        action={
          <button id="add-yt-btn" className="btn btn-primary" style={{ fontSize: 13 }}
            onClick={() => setShowDrawer(true)}>+ Add Video / Playlist</button>
        }
      />

      {/* Tab Switcher */}
      <div style={{ display: 'flex', gap: 0, marginBottom: 24, borderRadius: 10, overflow: 'hidden', border: '1px solid var(--border)', width: 'fit-content' }}>
        <button
          onClick={() => setTab('videos')}
          style={{
            padding: '10px 24px', fontSize: 13, fontWeight: 600,
            background: tab === 'videos' ? 'var(--gold)' : 'transparent',
            color: tab === 'videos' ? '#000' : 'var(--text-muted)',
            border: 'none', cursor: 'pointer', fontFamily: 'inherit',
            display: 'flex', alignItems: 'center', gap: 8
          }}
        >
          <Play size={14} /> Videos ({videos.length})
        </button>
        <button
          onClick={() => setTab('playlists')}
          style={{
            padding: '10px 24px', fontSize: 13, fontWeight: 600,
            background: tab === 'playlists' ? 'var(--gold)' : 'transparent',
            color: tab === 'playlists' ? '#000' : 'var(--text-muted)',
            border: 'none', cursor: 'pointer', fontFamily: 'inherit',
            borderLeft: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', gap: 8
          }}
        >
          <ListVideo size={14} /> Playlists ({playlists.length})
        </button>
      </div>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 48 }}><div className="spinner" /></div>
      ) : tab === 'videos' ? (
        videos.length === 0 ? (
          <div className="empty-state">
            <Play size={48} color="var(--text-muted)" />
            <h3>No videos allowlisted</h3>
            <p>Add YouTube videos you want to access during focus sessions</p>
          </div>
        ) : (
          <div className="grid-3">
            {videos.map(v => (
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
                    className="btn btn-danger" style={{ marginTop: 12, padding: '6px 14px', fontSize: 12, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}
                    onClick={() => removeItem(v.id)} id={`remove-yt-${v.id}`}>
                    <Trash2 size={12} /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        playlists.length === 0 ? (
          <div className="empty-state">
            <ListVideo size={48} color="var(--text-muted)" />
            <h3>No playlists allowlisted</h3>
            <p>Add a YouTube playlist URL — all videos inside it will be allowed automatically</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {playlists.map(p => (
              <div key={p.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: 'linear-gradient(135deg, rgba(230,194,122,0.15), rgba(230,194,122,0.05))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <ListVideo size={24} color="var(--gold)" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {p.title || 'Untitled Playlist'}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 3, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Link size={11} /> {p.playlistId}
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--green)', marginTop: 4, fontWeight: 600 }}>
                    All videos in this playlist are allowed
                  </div>
                </div>
                <button
                  style={{
                    background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)',
                    borderRadius: 8, padding: '8px 14px', cursor: 'pointer', flexShrink: 0,
                    color: 'var(--red)', fontSize: 12, fontWeight: 600, fontFamily: 'inherit',
                    display: 'flex', alignItems: 'center', gap: 6
                  }}
                  onClick={() => removeItem(p.id)} id={`remove-pl-${p.id}`}>
                  <Trash2 size={12} /> Remove
                </button>
              </div>
            ))}
          </div>
        )
      )}

      {/* Add Drawer */}
      {showDrawer && (
        <>
          <div className="drawer-overlay" onClick={() => setShowDrawer(false)} />
          <div className="drawer">
            <div className="drawer-header">
              <h2 className="drawer-title">Add Video or Playlist</h2>
              <button className="drawer-close" onClick={() => setShowDrawer(false)}>×</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div className="input-group">
                <label className="input-label">YouTube URL *</label>
                <input id="yt-url-input" className="input"
                  placeholder="Paste a video or playlist URL..."
                  value={form.url}
                  onChange={e => setForm(f => ({ ...f, url: e.target.value }))} />
                {form.url && (
                  <div style={{
                    marginTop: 8, fontSize: 12, fontWeight: 600, padding: '4px 10px',
                    borderRadius: 6, width: 'fit-content',
                    background: urlType === 'playlist' ? 'rgba(230,194,122,0.12)' : 'rgba(124,106,247,0.12)',
                    color: urlType === 'playlist' ? 'var(--gold)' : '#7c6af7'
                  }}>
                    {urlType === 'playlist' ? '📋 Playlist detected — all videos will be allowed' : '🎬 Video detected'}
                  </div>
                )}
              </div>
              <div className="input-group">
                <label className="input-label">Title (optional)</label>
                <input id="yt-title-input" className="input" placeholder="e.g. DSA full course, Lo-fi study mix"
                  value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
              </div>
              <button id="save-yt-btn" className="btn btn-primary btn-block" onClick={addItem} disabled={saving}
                style={{ background: 'linear-gradient(135deg, #e6c27a 0%, #ebd288 100%)' }}>
                {saving ? 'Saving...' : urlType === 'playlist' ? 'Allow Entire Playlist' : 'Add to Allowlist'}
              </button>
              <button className="btn btn-ghost btn-block" onClick={() => setShowDrawer(false)}>Cancel</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
