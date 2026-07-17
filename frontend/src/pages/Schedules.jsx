import { useState, useEffect } from 'react'
import client from '../api/client'
import PageHeader from '../components/PageHeader'

const DAYS = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']

export default function Schedules() {
  const [schedules, setSchedules] = useState([])
  const [loading, setLoading] = useState(true)
  const [showDrawer, setShowDrawer] = useState(false)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    label: '', startTime: '09:00', endTime: '17:00', daysOfWeek: [0,1,2,3,4], isActive: true,
  })

  useEffect(() => { fetchSchedules() }, [])

  async function fetchSchedules() {
    try {
      const r = await client.get('/api/schedules')
      setSchedules(r.data.schedules || [])
    } catch (e) { console.error(e) }
    finally { setLoading(false) }
  }

  async function addSchedule() {
    if (!form.label.trim()) return
    setSaving(true)
    try {
      await client.post('/api/schedules', form)
      setShowDrawer(false)
      setForm({ label: '', startTime: '09:00', endTime: '17:00', daysOfWeek: [0,1,2,3,4], isActive: true })
      fetchSchedules()
    } catch (e) { console.error(e) }
    finally { setSaving(false) }
  }

  async function toggleSchedule(id, current) {
    try {
      await client.patch(`/api/schedules/${id}`, { isActive: !current })
      setSchedules(schedules.map(s => s.id === id ? { ...s, isActive: !current } : s))
    } catch (e) { console.error(e) }
  }

  async function deleteSchedule(id) {
    try {
      await client.delete(`/api/schedules/${id}`)
      setSchedules(schedules.filter(s => s.id !== id))
    } catch (e) { console.error(e) }
  }

  function toggleDay(idx) {
    setForm(f => ({
      ...f, daysOfWeek: f.daysOfWeek.includes(idx) ? f.daysOfWeek.filter(d => d !== idx) : [...f.daysOfWeek, idx]
    }))
  }

  return (
    <div className="fade-up">
      <PageHeader
        title="Schedules"
        subtitle="Set your focus hours"
        action={
          <button id="add-schedule-btn" className="btn btn-primary" style={{ fontSize: 13 }}
            onClick={() => setShowDrawer(true)}>+ Add Schedule</button>
        }
      />

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 48 }}><div className="spinner" /></div>
      ) : schedules.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">📅</div>
          <h3>No schedules yet</h3>
          <p>Create a schedule to automatically block distractions during work hours</p>
        </div>
      ) : (
        <div className="grid-2">
          {schedules.map(s => (
            <div key={s.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700 }}>{s.label}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>{s.startTime} – {s.endTime}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <label className="toggle-wrap">
                    <input type="checkbox" checked={s.isActive} onChange={() => toggleSchedule(s.id, s.isActive)} />
                    <span className="toggle-slider" />
                  </label>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--red)', fontSize: 16, fontWeight: 700 }}
                    onClick={() => deleteSchedule(s.id)} id={`delete-schedule-${s.id}`}>×</button>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                {DAYS.map((d, i) => (
                  <span key={d} style={{
                    padding: '3px 8px', borderRadius: 12, fontSize: 11, fontWeight: 600,
                    background: (s.daysOfWeek || []).includes(i) ? 'rgba(124,106,247,0.15)' : 'var(--surface)',
                    color: (s.daysOfWeek || []).includes(i) ? 'var(--gold)' : 'var(--text-muted)',
                    border: '1px solid', borderColor: (s.daysOfWeek || []).includes(i) ? 'rgba(124,106,247,0.25)' : 'var(--border)',
                  }}>{d}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Side drawer */}
      {showDrawer && (
        <>
          <div className="drawer-overlay" onClick={() => setShowDrawer(false)} />
          <div className="drawer">
            <div className="drawer-header">
              <h2 className="drawer-title">New Schedule</h2>
              <button className="drawer-close" onClick={() => setShowDrawer(false)}>×</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div className="input-group">
                <label className="input-label">Label *</label>
                <input id="schedule-label" className="input" placeholder="e.g. Work Hours"
                  value={form.label} onChange={e => setForm(f => ({ ...f, label: e.target.value }))} />
              </div>
              <div className="grid-2">
                <div className="input-group">
                  <label className="input-label">Start Time</label>
                  <input id="schedule-start" type="time" className="input" value={form.startTime}
                    onChange={e => setForm(f => ({ ...f, startTime: e.target.value }))} />
                </div>
                <div className="input-group">
                  <label className="input-label">End Time</label>
                  <input id="schedule-end" type="time" className="input" value={form.endTime}
                    onChange={e => setForm(f => ({ ...f, endTime: e.target.value }))} />
                </div>
              </div>
              <div>
                <label className="input-label" style={{ display: 'block', marginBottom: 10 }}>Days</label>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {DAYS.map((d, i) => (
                    <button key={d} onClick={() => toggleDay(i)} id={`day-${d}`} style={{
                      padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 600,
                      border: '1px solid', cursor: 'pointer',
                      background: form.daysOfWeek.includes(i) ? 'var(--gold)' : 'var(--surface)',
                      borderColor: form.daysOfWeek.includes(i) ? 'var(--gold)' : 'var(--border)',
                      color: form.daysOfWeek.includes(i) ? '#fff' : 'var(--text-muted)',
                    }}>{d}</button>
                  ))}
                </div>
              </div>
              <button id="save-schedule-btn" className="btn btn-primary btn-block" onClick={addSchedule} disabled={saving}
                style={{ marginTop: 8, background: 'linear-gradient(135deg, #e6c27a 0%, #ebd288 100%)' }}>
                {saving ? 'Saving...' : 'Save Schedule'}
              </button>
              <button className="btn btn-ghost btn-block" onClick={() => setShowDrawer(false)}>Cancel</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
