import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import Sidebar from './components/Sidebar'
import Login from './pages/Login'
import Onboarding from './pages/Onboarding'
import Dashboard from './pages/Dashboard'
import Sessions from './pages/Sessions'
import BlockedApps from './pages/BlockedApps'
import Schedules from './pages/Schedules'
import YouTube from './pages/YouTube'
import Strictness from './pages/Strictness'
import Themes from './pages/Themes'
import Achievements from './pages/Achievements'
import Settings from './pages/Settings'
import About from './pages/About'
import Privacy from './pages/Privacy'

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  const location = useLocation()
  
  if (loading) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100dvh' }}>
      <div className="spinner" style={{ width: 32, height: 32 }} />
    </div>
  )
  if (!user) return <Navigate to="/login" replace />
  
  // Enforce onboarding if user has no schedules and is not on the onboarding page
  if ((!user.schedules || user.schedules.length === 0) && location.pathname !== '/onboarding') {
    return <Navigate to="/onboarding" replace />
  }
  
  // If user has schedules and tries to go to onboarding, redirect to dashboard
  if (user.schedules && user.schedules.length > 0 && location.pathname === '/onboarding') {
    return <Navigate to="/" replace />
  }

  return children
}

function AppRoutes() {
  const { user, loading } = useAuth()

  if (loading) return null

  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
      <Route path="/onboarding" element={<ProtectedRoute><Onboarding /></ProtectedRoute>} />
      <Route path="/" element={<ProtectedRoute><AppShell><Dashboard /></AppShell></ProtectedRoute>} />
      <Route path="/sessions" element={<ProtectedRoute><AppShell><Sessions /></AppShell></ProtectedRoute>} />
      <Route path="/blocked" element={<ProtectedRoute><AppShell><BlockedApps /></AppShell></ProtectedRoute>} />
      <Route path="/schedules" element={<ProtectedRoute><AppShell><Schedules /></AppShell></ProtectedRoute>} />
      <Route path="/youtube" element={<ProtectedRoute><AppShell><YouTube /></AppShell></ProtectedRoute>} />
      <Route path="/strictness" element={<ProtectedRoute><AppShell><Strictness /></AppShell></ProtectedRoute>} />
      <Route path="/themes" element={<ProtectedRoute><AppShell><Themes /></AppShell></ProtectedRoute>} />
      <Route path="/achievements" element={<ProtectedRoute><AppShell><Achievements /></AppShell></ProtectedRoute>} />
      <Route path="/settings" element={<ProtectedRoute><AppShell><Settings /></AppShell></ProtectedRoute>} />
      <Route path="/about" element={<ProtectedRoute><AppShell><About /></AppShell></ProtectedRoute>} />
      <Route path="/privacy" element={<ProtectedRoute><AppShell><Privacy /></AppShell></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

function AppShell({ children }) {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">{children}</main>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}
