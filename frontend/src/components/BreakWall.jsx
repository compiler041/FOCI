import { useState, useEffect } from 'react'
import { Play, Pause } from 'lucide-react'
import './BreakWall.css'

const QUOTES = [
  "Don't stop when you're tired. Stop when you're done.",
  "Discipline is choosing between what you want now and what you want most.",
  "Focus on being productive instead of busy.",
  "The only bad workout is the one that didn't happen. Wait, wrong app. The only bad focus session...",
  "Starve your distractions, feed your focus."
]

export default function BreakWall({ adDuration = 15, strictnessLevel = 1, onComplete }) {
  const [timeLeft, setTimeLeft] = useState(adDuration)
  const [quote] = useState(() => QUOTES[Math.floor(Math.random() * QUOTES.length)])
  
  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete()
      return
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, onComplete])

  const isPremium = strictnessLevel === 3
  
  return (
    <div className={`break-wall-container ${isPremium ? 'premium' : ''}`}>
      <div className="break-wall-content fade-up">
        
        {isPremium ? (
          <>
            <div className="premium-glow-orb" />
            <h2 className="break-wall-title">A moment of calm.</h2>
            <p className="break-wall-quote">"{quote}"</p>
            <div className="music-player">
              {/* Fake music player for now */}
              <div className="music-controls">
                <button className="music-btn"><Play size={20} color="#fff" /></button>
                <div className="music-track">
                  <div className="music-title">Lofi Study Mix - Relaxing beats</div>
                  <div className="music-progress">
                    <div className="music-bar" style={{ width: '30%' }} />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="ad-placeholder">
              <span className="ad-label">ADVERTISEMENT</span>
              <p className="ad-text">Stay focused.</p>
              <p className="ad-quote">"{quote}"</p>
            </div>
          </>
        )}

        <div className="break-timer-container">
          <div className="break-timer-circle">
            <svg viewBox="0 0 100 100" className="timer-svg">
              <circle cx="50" cy="50" r="45" className="timer-bg" />
              <circle 
                cx="50" cy="50" r="45" 
                className="timer-progress" 
                style={{ strokeDashoffset: `${283 - (timeLeft / adDuration) * 283}` }}
              />
            </svg>
            <div className="timer-text">{timeLeft}</div>
          </div>
          <p className="timer-label">Break starts in...</p>
        </div>
      </div>
    </div>
  )
}
