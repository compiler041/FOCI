import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const MENU_ITEMS = [
  { label: 'Schedules', subtitle: 'Set office hours & blocked times', emoji: '📅', to: '/schedules' },
  { label: 'Strictness', subtitle: 'Break limits & cooldown duration', emoji: '⚡', to: '/strictness' },
  { label: 'Themes', subtitle: 'Customize your focus experience', emoji: '🎨', to: '/themes' },
  { label: 'Achievements', subtitle: 'View your focus milestones', emoji: '🏆', to: '/achievements' },
]

export default function Settings() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="fade-up">
      <PageHeader title="Settings" />

      {/* Profile card */}
      <div className="card fade-up-1" style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 28 }}>
        <div style={{
          width: 64, height: 64, borderRadius: '50%',
          background: 'linear-gradient(135deg, #e6c27a, #ebd288)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 24, fontWeight: 800, color: '#fff', flexShrink: 0,
          boxShadow: '0 4px 20px rgba(124,106,247,0.35)',
        }}>
          {(user?.name || 'U')[0].toUpperCase()}
        </div>
        <div>
          <div style={{ fontSize: 20, fontWeight: 700 }}>{user?.name || 'User'}</div>
          <div style={{ fontSize: 14, color: 'var(--text-muted)', marginTop: 2 }}>{user?.email || ''}</div>
        </div>
      </div>

      {/* Preferences */}
      <p className="section-label">Preferences</p>
      <div className="grid-2 fade-up-2" style={{ marginBottom: 32 }}>
        {MENU_ITEMS.map(item => (
          <button
            key={item.to}
            className="card"
            style={{ cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: 16 }}
            onClick={() => navigate(item.to)}
            id={`settings-${item.label.toLowerCase()}`}
          >
            <span style={{ fontSize: 28 }}>{item.emoji}</span>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600 }}>{item.label}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{item.subtitle}</div>
            </div>
          </button>
        ))}
      </div>

      <button id="logout-btn" className="btn btn-danger" onClick={logout} style={{ width: 200 }}>
        Sign Out
      </button>

      <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 24 }}>Foci v1.0.0</p>
    </div>
  )
}
