import { useState, useEffect } from 'react'
import { Plus, X, Globe, Shield, Search, Trash2 } from 'lucide-react'
import client from '../api/client'
import PageHeader from '../components/PageHeader'
import './BlockedApps.css'

const CATEGORY_MAP = {
  'instagram.com': 'Social',
  'facebook.com': 'Social',
  'x.com': 'Social',
  'twitter.com': 'Social',
  'tiktok.com': 'Social',
  'reddit.com': 'Social',
  'snapchat.com': 'Social',
  'pinterest.com': 'Social',
  'linkedin.com': 'Social',
  'tumblr.com': 'Social',
  'youtube.com': 'Video/Streaming',
  'twitch.tv': 'Video/Streaming',
  'netflix.com': 'Video/Streaming',
  'primevideo.com': 'Video/Streaming',
  'hotstar.com': 'Video/Streaming',
  'open.spotify.com': 'Video/Streaming',
  'discord.com': 'Messaging',
  'web.whatsapp.com': 'Messaging',
  'web.telegram.org': 'Messaging',
}

const SUGGESTIONS = [
  { appName: 'Instagram', browserUrl: 'instagram.com' },
  { appName: 'Facebook', browserUrl: 'facebook.com' },
  { appName: 'Twitter / X', browserUrl: 'x.com' },
  { appName: 'TikTok', browserUrl: 'tiktok.com' },
  { appName: 'Reddit', browserUrl: 'reddit.com' },
  { appName: 'YouTube', browserUrl: 'youtube.com' },
  { appName: 'Snapchat', browserUrl: 'snapchat.com' },
  { appName: 'Pinterest', browserUrl: 'pinterest.com' },
  { appName: 'LinkedIn', browserUrl: 'linkedin.com' },
  { appName: 'Tumblr', browserUrl: 'tumblr.com' },
  { appName: 'Discord', browserUrl: 'discord.com' },
  { appName: 'Twitch', browserUrl: 'twitch.tv' },
  { appName: 'WhatsApp Web', browserUrl: 'web.whatsapp.com' },
  { appName: 'Telegram Web', browserUrl: 'web.telegram.org' },
  { appName: 'Netflix', browserUrl: 'netflix.com' },
  { appName: 'Amazon Prime', browserUrl: 'primevideo.com' },
  { appName: 'Hotstar', browserUrl: 'hotstar.com' },
  { appName: 'Spotify', browserUrl: 'open.spotify.com' },
]

function getFaviconUrl(browserUrl) {
  if (!browserUrl) return null
  const domain = browserUrl.replace(/^https?:\/\//, '').split('/')[0]
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
}

function getCategory(url) {
  if (!url) return 'Other'
  const clean = url.toLowerCase().replace(/^www\./, '')
  return CATEGORY_MAP[clean] || 'Other'
}

const FILTERS = ['All', 'Social', 'Video/Streaming', 'Messaging', 'Other']

function SiteIcon({ url, name, size = 40 }) {
  const [errored, setErrored] = useState(false)
  const faviconUrl = getFaviconUrl(url)
  if (!faviconUrl || errored) {
    return (
      <div className="app-icon-letter" style={{ width: size, height: size }}>
        {name?.[0]?.toUpperCase() || '?'}
      </div>
    )
  }
  return (
    <div style={{
      width: size, height: size, borderRadius: 10,
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid var(--border)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', flexShrink: 0
    }}>
      <img
        src={faviconUrl}
        alt={name}
        width={size * 0.6}
        height={size * 0.6}
        onError={() => setErrored(true)}
        style={{ objectFit: 'contain' }}
      />
    </div>
  )
}

function AppCard({ app, onToggle, onDelete }) {
  const [confirmDelete, setConfirmDelete] = useState(false)
  const category = getCategory(app.browserUrl)

  return (
    <div className="app-card">
      {confirmDelete ? (
        <>
          <div className="app-card-left" style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>
              Remove <span style={{ color: 'var(--gold)' }}>{app.appName}</span>?
            </div>
          </div>
          <div className="delete-confirm">
            <button
              className="btn-confirm-no"
              onClick={() => setConfirmDelete(false)}
              id={`cancel-delete-${app.id}`}
            >
              Cancel
            </button>
            <button
              className="btn-confirm-yes"
              onClick={() => onDelete(app.id)}
              id={`confirm-delete-${app.id}`}
            >
              Remove
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="app-card-left">
            <SiteIcon url={app.browserUrl} name={app.appName} />
            <div className="app-card-info">
              <span className="app-card-name">{app.appName}</span>
              <span className="app-card-url">{app.browserUrl || '—'}</span>
              <span className="app-card-category">{category}</span>
            </div>
          </div>
          <div className="app-card-right">
            <button
              className="btn-trash"
              onClick={() => setConfirmDelete(true)}
              aria-label="Remove site"
              id={`trash-${app.id}`}
            >
              <Trash2 size={15} />
            </button>
            <label className="toggle-wrap">
              <input
                type="checkbox"
                checked={app.isBlocked}
                onChange={() => onToggle(app.id, app.isBlocked)}
                id={`toggle-${app.id}`}
              />
              <span className="toggle-slider" />
            </label>
          </div>
        </>
      )}
    </div>
  )
}

export default function BlockedApps() {
  const [apps, setApps] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({ appName: '', browserUrl: '' })
  const [showForm, setShowForm] = useState(false)
  const [saving, setSaving] = useState(false)
  const [addingId, setAddingId] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

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
    // Optimistic update
    setApps(prev => prev.map(a => a.id === id ? { ...a, isBlocked: !current } : a))
    try {
      await client.patch(`/api/blocked-apps/${id}`, { isBlocked: !current })
    } catch (e) {
      // Revert on failure
      setApps(prev => prev.map(a => a.id === id ? { ...a, isBlocked: current } : a))
      console.error(e)
    }
  }

  async function deleteApp(id) {
    setApps(prev => prev.filter(a => a.id !== id))
    try {
      await client.delete(`/api/blocked-apps/${id}`)
    } catch (e) {
      console.error(e)
      fetchApps()
    }
  }

  const addedUrls = new Set(apps.map(a => (a.browserUrl || '').toLowerCase()))
  const remainingSuggestions = SUGGESTIONS.filter(
    s => !addedUrls.has(s.browserUrl.toLowerCase())
  )

  const filteredApps = apps.filter(app => {
    const matchesCategory = activeFilter === 'All' || getCategory(app.browserUrl) === activeFilter
    const matchesSearch = !searchQuery ||
      app.appName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.browserUrl?.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const blockedCount = apps.filter(a => a.isBlocked).length
  const categoryCounts = FILTERS.reduce((acc, f) => {
    acc[f] = f === 'All' ? apps.length : apps.filter(a => getCategory(a.browserUrl) === f).length
    return acc
  }, {})

  return (
    <div className="fade-up blocked-apps-page">
      <PageHeader
        title="Blocked Apps"
        subtitle={`${blockedCount} site${blockedCount !== 1 ? 's' : ''} blocked`}
        action={
          <button
            id="add-app-btn"
            className="btn btn-primary add-site-btn"
            onClick={() => setShowForm(s => !s)}
          >
            {showForm
              ? <><X size={14} /> Cancel</>
              : <><Plus size={14} /> Add Site</>
            }
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
        <div style={{ marginBottom: 36 }}>
          <div className="section-header">
            <Shield size={15} color="var(--gold)" />
            Popular to Block
            <span className="count-badge">{remainingSuggestions.length}</span>
          </div>
          <div className="suggestions-grid">
            {remainingSuggestions.map(s => (
              <button
                key={s.appName}
                className="suggestion-btn"
                onClick={() => quickAdd(s)}
                disabled={addingId === s.appName}
                style={{ opacity: addingId === s.appName ? 0.5 : 1 }}
              >
                <SiteIcon url={s.browserUrl} name={s.appName} size={36} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="suggestion-name">{s.appName}</div>
                  <div className="suggestion-url">{s.browserUrl}</div>
                </div>
                {addingId === s.appName
                  ? <div className="spinner" style={{ width: 14, height: 14 }} />
                  : <Plus size={15} color="var(--gold)" style={{ flexShrink: 0 }} />
                }
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Blocked apps list */}
      {loading ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '64px 48px', gap: 16 }}>
          <div className="spinner" style={{ width: 32, height: 32 }} />
          <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>Loading your blocked sites…</p>
        </div>
      ) : apps.length === 0 ? (
        <div className="empty-state" style={{ marginTop: 16 }}>
          <div className="empty-state-icon">🚫</div>
          <h3>No blocked apps yet</h3>
          <p>Click any app above to instantly block it during focus sessions</p>
        </div>
      ) : (
        <div>
          <div className="section-header">
            <Globe size={15} color="var(--gold)" />
            Your Blocked List
            <span className="count-badge">{apps.length}</span>
          </div>

          {/* Filter bar */}
          <div className="filter-bar">
            <div className="filter-chips">
              {FILTERS.map(f => (
                <button
                  key={f}
                  className={`filter-chip ${activeFilter === f ? 'active' : ''}`}
                  onClick={() => setActiveFilter(f)}
                  id={`filter-${f.toLowerCase().replace('/', '-')}`}
                >
                  {f}
                  {categoryCounts[f] > 0 && (
                    <span style={{ marginLeft: 5, opacity: 0.7, fontVariantNumeric: 'tabular-nums' }}>
                      {categoryCounts[f]}
                    </span>
                  )}
                </button>
              ))}
            </div>
            <div className="search-wrap">
              <Search size={14} className="search-icon" />
              <input
                className="search-input"
                placeholder="Search sites…"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                id="search-blocked-apps"
              />
            </div>
          </div>

          {filteredApps.length === 0 ? (
            <div className="empty-state" style={{ padding: '48px 24px' }}>
              <div className="empty-state-icon">🔍</div>
              <h3>No matches found</h3>
              <p>Try adjusting your filter or search term</p>
            </div>
          ) : (
            <div className="app-cards-grid">
              {filteredApps.map(app => (
                <AppCard
                  key={app.id}
                  app={app}
                  onToggle={toggleApp}
                  onDelete={deleteApp}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
