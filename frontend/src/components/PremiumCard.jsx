import { Crown, Sparkles, Music, Zap, Ban, Palette } from 'lucide-react'
import './PremiumCard.css'

export default function PremiumCard() {
  return (
    <div className="premium-card">
      <div className="premium-card-header">
        <div className="premium-icon-wrapper">
          <Crown size={32} className="premium-icon" />
          <Sparkles size={16} className="premium-sparkle" />
        </div>
        <h2>Upgrade to Foci Premium</h2>
        <div className="premium-price">$1<span>/month</span></div>
      </div>
      
      <div className="premium-benefits">
        <div className="premium-benefit">
          <Music size={18} />
          <span>Soothing music & quotes instead of ads during breaks</span>
        </div>
        <div className="premium-benefit">
          <Zap size={18} />
          <span>Level 3 Strictness — escalating deterrents up to 5 minutes</span>
        </div>
        <div className="premium-benefit">
          <Ban size={18} />
          <span>No Break Mode — lock yourself in with zero escape</span>
        </div>
        <div className="premium-benefit">
          <Palette size={18} />
          <span>Premium Themes — exclusive visual experiences</span>
        </div>
        <div className="premium-benefit">
          <Crown size={18} />
          <span>Priority Support</span>
        </div>
      </div>

      <button className="premium-cta">
        Upgrade Now
      </button>
    </div>
  )
}
