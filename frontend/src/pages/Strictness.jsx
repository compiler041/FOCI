import { useState, useEffect } from 'react'
import client from '../api/client'
import PageHeader from '../components/PageHeader'

export default function Strictness() {
  const [data, setData] = useState({ maxBreaks: 3, baseAdDuration: 30, adIncreasePerBreak: 10, noBreaksAllowed: false })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    client.get('/api/strictness').then(r => {
      if (r.data.strictness) setData(r.data.strictness)
    }).catch(console.error).finally(() => setLoading(false))
  }, [])

  async function save() {
    setSaving(true)
    try {
      await client.post('/api/strictness', data)
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    } catch (e) { console.error(e) }
    finally { setSaving(false) }
  }

  const sliders = [
    { key: 'maxBreaks', label: 'Max Breaks per Session', min: 0, max: 10, step: 1, unit: 'breaks' },
    { key: 'baseAdDuration', label: 'Break Cooldown Duration', min: 10, max: 120, step: 5, unit: 'sec' },
    { key: 'adIncreasePerBreak', label: 'Extra Cooldown per Break', min: 0, max: 30, step: 5, unit: 'sec' },
  ]

  return (
    <div className="fade-up">
      <PageHeader title="Strictness" subtitle="Configure break rules" />

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 48 }}><div className="spinner" /></div>
      ) : (
        <div style={{ maxWidth: 640 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {sliders.map(s => (
              <div key={s.key} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
                  <span style={{ fontSize: 15, fontWeight: 600 }}>{s.label}</span>
                  <span style={{ fontSize: 22, fontWeight: 800, color: 'var(--gold)' }}>
                    {data[s.key]}<span style={{ fontSize: 12, color: 'var(--text-muted)', marginLeft: 4 }}>{s.unit}</span>
                  </span>
                </div>
                <input id={`slider-${s.key}`} type="range" min={s.min} max={s.max} step={s.step}
                  value={data[s.key]}
                  onChange={e => setData(d => ({ ...d, [s.key]: Number(e.target.value) }))}
                  style={{ width: '100%', accentColor: 'var(--gold)', cursor: 'pointer' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 11, color: 'var(--text-muted)' }}>
                  <span>{s.min} {s.unit}</span><span>{s.max} {s.unit}</span>
                </div>
              </div>
            ))}

            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600 }}>No Breaks Mode</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 3 }}>Zero breaks allowed per session</div>
                </div>
                <label className="toggle-wrap">
                  <input type="checkbox" id="no-breaks-toggle" checked={data.noBreaksAllowed}
                    onChange={e => setData(d => ({ ...d, noBreaksAllowed: e.target.checked }))} />
                  <span className="toggle-slider" />
                </label>
              </div>
            </div>

            <button id="save-strictness-btn" className="btn btn-primary" onClick={save} disabled={saving}
              style={{ width: 200, background: saved ? 'var(--green)' : undefined }}>
              {saved ? '✓ Saved!' : saving ? 'Saving...' : 'Save Settings'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
