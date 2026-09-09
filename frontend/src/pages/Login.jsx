import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import client from '../api/client'
import logoImg from '../assets/logo.png'
import './Login.css'

export default function Login() {
  const { setToken } = useAuth()
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function updateField(field, value) {
    setForm(f => ({ ...f, [field]: value }))
    setError('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (!form.email.trim() || !form.password.trim()) {
      setError('Email and password are required')
      return
    }
    if (mode === 'signup' && !form.name.trim()) {
      setError('Name is required')
      return
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }
    setLoading(true)
    try {
      const endpoint = mode === 'login' ? '/api/auth/login' : '/api/auth/signup'
      const payload = mode === 'login'
        ? { email: form.email, password: form.password }
        : { name: form.name, email: form.email, password: form.password }
      const res = await client.post(endpoint, payload)
      setToken(res.data.token, res.data.user)
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  async function handleGoogleLogin() {
    setLoading(true)
    const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000'
    window.location.href = `${API_BASE}/api/auth/google`
  }

  return (
    <div className="login-page">
      {/* Left — Hero */}
      <div className="login-hero">
        <img src="/login-bg.png" alt="Focus" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Right — Form */}
      <div className="login-form-side">
        <div className="login-form-container">
          {/* Logo */}
          <div className="login-form-logo">
            <img src={logoImg} className="logo-img" style={{ width: 44, height: 44 }} alt="FOCI Logo" />
            <span className="login-form-logo-text">FOCI</span>
          </div>

          {/* OAuth buttons */}
          <button
            id="google-login-btn"
            className="login-oauth-btn"
            onClick={handleGoogleLogin}
            disabled={loading}
            type="button"
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="login-divider">
            <span>or</span>
          </div>

          {/* Error */}
          {error && (
            <div className="login-error" id="login-error">
              <span>⚠</span> {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="login-form">
            {mode === 'signup' && (
              <div className="input-group">
                <label className="input-label">Name</label>
                <input
                  id="signup-name"
                  className="input"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={e => updateField('name', e.target.value)}
                  autoComplete="name"
                />
              </div>
            )}

            <div className="input-group">
              <label className="input-label">Email</label>
              <input
                id="login-email"
                className="input"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={e => updateField('email', e.target.value)}
                autoComplete="email"
              />
            </div>

            <div className="input-group">
              <label className="input-label">Password</label>
              <input
                id="login-password"
                className="input"
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={e => updateField('password', e.target.value)}
                autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              />
            </div>

            <button
              id="login-submit-btn"
              type="submit"
              className="btn btn-primary btn-block"
              disabled={loading}
              style={{ marginTop: 4, background: 'linear-gradient(135deg, #e6c27a 0%, #ebd288 100%)' }}
            >
              {loading
                ? (mode === 'login' ? 'Signing in...' : 'Creating account...')
                : (mode === 'login' ? 'Log In' : 'Sign Up')
              }
            </button>
          </form>

          <div className="login-mode-row">
            {mode === 'login' ? (
              <p>Forgot Password?&nbsp;&nbsp;&nbsp;<button type="button" className="login-toggle-btn" onClick={() => { setMode('signup'); setError('') }} id="switch-to-signup">Sign Up</button></p>
            ) : (
              <p>Already have an account?&nbsp;<button type="button" className="login-toggle-btn" onClick={() => { setMode('login'); setError('') }} id="switch-to-login">Log In</button></p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
