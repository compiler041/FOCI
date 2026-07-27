import { Shield, Target, Brain } from 'lucide-react'
import PageHeader from '../components/PageHeader'

export default function About() {
  return (
    <div className="fade-up">
      <PageHeader title="About" subtitle="The story behind Foci" />

      {/* Section 1 - Meet the Founder */}
      <div className="card fade-up-1" style={{ marginBottom: 24, borderLeft: '4px solid var(--gold)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 16 }}>
          <div style={{
            width: 72, height: 72, borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--gold), var(--gold-dim))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 28, fontWeight: 800, color: '#fff', flexShrink: 0,
            boxShadow: '0 4px 20px var(--gold-glow)',
          }}>
            VR
          </div>
          <div>
            <div style={{ fontSize: 24, fontWeight: 700 }}>Vaibhav Rathod</div>
            <div style={{ fontSize: 14, color: 'var(--text-sub)', marginTop: 4 }}>Founder & Developer</div>
          </div>
        </div>
        <p style={{ fontSize: 15, color: 'var(--text)', lineHeight: 1.7, marginBottom: 20 }}>
          I'm Vaibhav Rathod, a full-stack developer, creator, and productivity advocate. I firmly believe that the biggest threat to our generation isn't a lack of opportunity or talent — it's the systematic theft of our attention by sophisticated algorithms. 
          <br /><br />
          I built Foci out of a deeply personal frustration. I was tired of sitting down to do deep work, only to find myself mindlessly scrolling through social media an hour later. The platforms we use daily employ thousands of engineers with one goal: keeping you hooked. Foci is the antidote. It's designed not just to block apps, but to re-train your brain for sustained, intense focus.
        </p>
        <a href="https://github.com/vaibhavrathod" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'rgba(230, 194, 122, 0.1)', color: 'var(--gold)', border: '1px solid var(--gold-dim)', display: 'inline-flex', padding: '8px 16px', fontSize: 14, textDecoration: 'none' }}>
          GitHub
        </a>
      </div>

      {/* Section 2 - Our Mission */}
      <div className="card fade-up-2" style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>Our Mission</h2>
        <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.7 }}>
          Social media applications don't serve you — they control you. Every infinite scroll, every notification badge, and every autoplaying video is meticulously engineered using behavioral psychology to hijack your dopamine receptors. You aren't their customer; your attention is the product they sell.
          <br /><br />
          Foci exists to give you that control back. Our ultimate target is uncompromising and simple: <strong>no one should ever get derailed from their life's work by cheap digital distractions.</strong> We are building a movement of deep workers, creators, and students who refuse to let algorithms dictate their potential. We believe that when you ruthlessly protect your focus, you inevitably protect your future.
        </p>
      </div>

      {/* Section 3 - What We Believe */}
      <div className="grid-3 fade-up-3" style={{ marginBottom: 40, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 }}>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 24 }}>
          <Shield style={{ color: 'var(--gold)', width: 32, height: 32, marginBottom: 16 }} />
          <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>Your attention is your most valuable asset</p>
        </div>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 24 }}>
          <Target style={{ color: 'var(--gold)', width: 32, height: 32, marginBottom: 16 }} />
          <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>Discipline beats motivation every time</p>
        </div>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 24 }}>
          <Brain style={{ color: 'var(--gold)', width: 32, height: 32, marginBottom: 16 }} />
          <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>Deep work creates extraordinary results</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 14, paddingBottom: 40 }}>
        Built with focus, for focus. 🏗️
      </div>
    </div>
  )
}
