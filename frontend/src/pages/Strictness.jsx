import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { Shield, Zap, Crown, Lock, Check, Music, Ban } from 'lucide-react'
import client from '../api/client'
import PageHeader from '../components/PageHeader'

const LEVELS = [
  {
    level: 1,
    name: 'Standard',
    icon: Shield,
    color: '#9ca3af',
    premium: false,
    description: 'A gentle nudge to stay focused',
    features: [
      '15 second ad before each break',
      '15 minute break duration',
      'Unlimited breaks allowed',
    ],
  },
  {
    level: 2,
    name: 'Strict',
    icon: Zap,
    color: '#e6c27a',
    premium: false,
    description: 'Increasing deterrents as you take more breaks',
    features: [
      'Ad escalates: 15s → 30s → 45s → 60s',
      '15 minute break duration',
      'Unlimited breaks allowed',
    ],
  },
  {
    level: 3,
    name: 'Extreme',
    icon: Crown,
    color: '#d4af37',
    premium: true,
    description: 'Maximum accountability with soothing music',
    features: [
      'Music + quotes instead of ads',
      'Escalates: 15s → 30s → 1m → 5m',
      'No Break Mode available',
      '15 minute break duration',
    ],
  },
]

export default function Strictness() {
  const { user } = useAuth()
  const [currentLevel, setCurrentLevel] = useState(1)
  const [noBreaksMode, setNoBreaksMode] = useState(false)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    client.get('/api/strictness')
      .then(r => {
        if (r.data.strictnessLevel) setCurrentLevel(r.data.strictnessLevel)
        if (r.data.noBreaksAllowed) setNoBreaksMode(r.data.noBreaksAllowed)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  async function selectLevel(level) {
    if (level === 3 && !user?.isPremium) return
    setSaving(true)
    try {
      await client.put('/api/strictness', { level })
      setCurrentLevel(level)
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    } catch (e) { console.error(e) }
    finally { setSaving(false) }
  }

  return (
    <div className="fade-up">
      <PageHeader title="Strictness" subtitle="Choose your accountability level" />

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 48 }}><div className="spinner" /></div>
      ) : (
        <div style={{ maxWidth: 800 }}>
          {/* Tier cards */}
          <div className="grid-3" style={{ marginBottom: 28 }}>
            {LEVELS.map(tier => {
              const Icon = tier.icon
              const isActive = currentLevel === tier.level
              const isLocked = tier.premium && !user?.isPremium

              return (
                <button
                  key={tier.level}
                  className="card"
                  onClick={() => selectLevel(tier.level)}
                  disabled={saving}
                  id={`strictness-level-${tier.level}`}
                  style={{
                    cursor: isLocked ? 'not-allowed' : 'pointer',
                    textAlign: 'center',
                    padding: '32px 20px',
                    border: `2px solid ${isActive ? tier.color : 'var(--border)'}`,
                    boxShadow: isActive ? `0 0 24px ${tier.color}33` : 'none',
                    transform: isActive ? 'translateY(-2px)' : 'none',
                    transition: 'all 0.25s ease',
                    opacity: isLocked ? 0.6 : 1,
                    position: 'relative',
                  }}
                >
                  {/* Premium badge */}
                  {tier.premium && (
                    <div style={{
                      position: 'absolute', top: 12, right: 12,
                      background: 'linear-gradient(135deg, #d4af37, #e6c27a)',
                      borderRadius: 20, padding: '3px 10px',
                      fontSize: 10, fontWeight: 800, color: '#fff',
                      letterSpacing: '0.05em',
                    }}>
                      PREMIUM
                    </div>
                  )}

                  {/* Icon */}
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%',
                    background: `${tier.color}18`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 16px',
                    border: `2px solid ${tier.color}33`,
                  }}>
                    {isLocked ? (
                      <Lock size={24} color={tier.color} />
                    ) : (
                      <Icon size={24} color={tier.color} />
                    )}
                  </div>

                  {/* Name */}
                  <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>{tier.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-sub)', marginBottom: 16 }}>{tier.description}</div>

                  {/* Features */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, textAlign: 'left' }}>
                    {tier.features.map((f, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--text-sub)' }}>
                        <Check size={14} color={tier.color} style={{ flexShrink: 0 }} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Active indicator */}
                  {isActive && (
                    <div style={{
                      marginTop: 16, fontSize: 11, fontWeight: 800,
                      color: tier.color, letterSpacing: '0.08em',
                    }}>
                      ACTIVE
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          {/* No Break Mode — premium only */}
          {currentLevel === 3 && user?.isPremium && (
            <div className="card fade-up-1">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <Ban size={20} color="var(--red)" />
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600 }}>No Break Mode</div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 3 }}>Zero breaks allowed — total lockdown</div>
                  </div>
                </div>
                <label className="toggle-wrap">
                  <input
                    type="checkbox"
                    id="no-breaks-toggle"
                    checked={noBreaksMode}
                    onChange={e => setNoBreaksMode(e.target.checked)}
                  />
                  <span className="toggle-slider" />
                </label>
              </div>
            </div>
          )}

          {saved && (
            <div style={{ marginTop: 16, fontSize: 14, fontWeight: 600, color: 'var(--green)', textAlign: 'center' }}>
              Settings saved successfully
            </div>
          )}
        </div>
      )}
    </div>
  )
}
