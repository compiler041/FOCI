import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const client = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
})

// Attach JWT token to every request
client.interceptors.request.use((config) => {
  const token = localStorage.getItem('foci_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// On 401 — clear token and redirect to login
client.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem('foci_token')
      window.location.href = '/login'
    }
    return Promise.reject(err)
  }
)

export default client
