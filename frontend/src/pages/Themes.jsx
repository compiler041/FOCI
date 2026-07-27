import { Palette, Sparkles } from 'lucide-react'
import PageHeader from '../components/PageHeader'

export default function Themes() {
  return (
    <div className="fade-up">
      <PageHeader title="Themes" subtitle="Customize your experience" />

      <div style={{
        marginTop: 48,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 24px'
      }}>
        <div className="card" style={{
          position: 'relative',
          padding: '64px 48px',
          textAlign: 'center',
          maxWidth: 600,
          width: '100%',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, height: 4,
            background: 'linear-gradient(90deg, #e6c27a, #c5a165, #e6c27a)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 3s infinite linear'
          }} />

          <div style={{
            width: 80, height: 80, margin: '0 auto 32px',
            borderRadius: '50%',
            background: 'var(--gold-glow)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--gold)',
            position: 'relative'
          }}>
            <Palette size={40} style={{ animation: 'pulse 2s infinite' }} />
            <Sparkles size={24} style={{ position: 'absolute', top: -4, right: -4, color: 'var(--text)' }} />
          </div>

          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>Themes Coming Soon</h2>
          <p style={{ fontSize: 16, color: 'var(--text-sub)', marginBottom: 40, lineHeight: 1.6 }}>
            We're crafting beautiful focus environments for you. Stay tuned.
          </p>

          <div style={{
            display: 'flex', justifyContent: 'center', gap: 16
          }}>
            {['#e6c27a', '#22c55e', '#0ea5e9', '#a855f7', '#ec4899'].map((color, i) => (
              <div key={i} style={{
                width: 24, height: 24, borderRadius: '50%',
                background: color,
                boxShadow: `0 0 12px ${color}66`,
                opacity: 0.8
              }} />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  )
}
