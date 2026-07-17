import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { BarChart2, Timer, Ban, Calendar, PlaySquare, Zap, Palette, Trophy, Settings } from 'lucide-react'

const NAV_ITEMS = [
  { to: '/', label: 'Dashboard', icon: BarChart2, exact: true },
  { to: '/sessions', label: 'Sessions', icon: Timer },
  { to: '/blocked', label: 'Blocked Apps', icon: Ban },
  { to: '/schedules', label: 'Schedules', icon: Calendar },
  { to: '/youtube', label: 'YouTube', icon: PlaySquare },
  { to: '/strictness', label: 'Strictness', icon: Zap },
  { to: '/themes', label: 'Themes', icon: Palette },
  { to: '/achievements', label: 'Achievements', icon: Trophy },
]

export default function Sidebar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="sidebar-logo-orb" />
        <span className="sidebar-logo-text">FOCI</span>
      </div>

      {/* Nav */}
      <nav className="sidebar-nav">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.exact}
              className={({ isActive }) => `sidebar-item${isActive ? ' active' : ''}`}
              id={`sidebar-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <span className="sidebar-icon"><Icon size={18} /></span>
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <NavLink
          to="/settings"
          className={({ isActive }) => `sidebar-item${isActive ? ' active' : ''}`}
          id="sidebar-settings"
        >
          <span className="sidebar-icon"><Settings size={18} /></span>
          <span>Settings</span>
        </NavLink>

        {user && (
          <div className="sidebar-user" onClick={() => navigate('/settings')}>
            <div className="sidebar-avatar">
              {(user.name || 'U')[0].toUpperCase()}
            </div>
            <div className="sidebar-user-info">
              <div className="sidebar-user-name">{user.name || 'User'}</div>
              <div className="sidebar-user-email">{user.email || ''}</div>
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}
