import './Orb.css'

export default function Orb({ score = 0, label = 'Focus Score', size = 200 }) {
  // Color shifts from red (low) to green (high) via purple
  const intensity = Math.min(Math.max(score / 10, 0), 1)

  return (
    <div className="orb-container" style={{ '--orb-size': `${size}px` }}>
      {/* Outer ambient glow rings */}
      <div className="orb-ring orb-ring-3" />
      <div className="orb-ring orb-ring-2" />
      <div className="orb-ring orb-ring-1" />
      {/* The orb itself */}
      <div className="orb">
        <div className="orb-inner" />
        <div className="orb-shimmer" />
        <div className="orb-specular" />
      </div>
      {/* Score label floating above orb */}
      <div className="orb-score-label">
        <span className="orb-now">NOW</span>
        <span className="orb-score">{score.toFixed(1)}</span>
        <span className="orb-desc">{label}</span>
      </div>
    </div>
  )
}
