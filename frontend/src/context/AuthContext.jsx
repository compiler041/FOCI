import { createContext, useContext, useState, useEffect } from 'react'
import client from '../api/client'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('foci_token')
    if (!token) {
      setLoading(false)
      return
    }
    // Verify token is still valid by hitting a protected endpoint
    client.get('/api/auth/me')
      .then(res => setUser(res.data.user))
      .catch(() => {
        localStorage.removeItem('foci_token')
        setUser(null)
      })
      .finally(() => setLoading(false))
  }, [])

  function logout() {
    localStorage.removeItem('foci_token')
    // Tell extension to clear token
    try {
      chrome?.runtime?.sendMessage({ type: 'CLEAR_TOKEN' })
    } catch (_) {}
    setUser(null)
  }

  function setToken(token, userData) {
    localStorage.setItem('foci_token', token)
    // Tell extension about the new token
    try {
      chrome?.runtime?.sendMessage({ type: 'SET_TOKEN', token })
    } catch (_) {}
    setUser(userData)
  }

  return (
    <AuthContext.Provider value={{ user, loading, logout, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
