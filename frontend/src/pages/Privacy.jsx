import PageHeader from '../components/PageHeader'
import { Shield, Database, Lock, Globe, UserX, Mail } from 'lucide-react'

export default function Privacy() {
  const sections = [
    {
      icon: Shield,
      title: 'Information We Collect',
      content: 'We collect your email address and name for authentication purposes. We also store your focus session data, blocked app preferences, and schedule configurations to provide our service.'
    },
    {
      icon: Database,
      title: 'How We Use Your Data',
      content: 'Your data is used solely to power your Foci experience — tracking focus sessions, managing blocked apps, and calculating achievements. We never sell your data to third parties.'
    },
    {
      icon: Lock,
      title: 'Data Storage',
      content: 'Your data is stored securely on encrypted servers. We use industry-standard security practices to protect your information.'
    },
    {
      icon: Globe,
      title: 'Third-Party Services',
      content: 'We use Google OAuth for authentication. When you sign in with Google, we receive your basic profile information (name, email, profile picture) but never your Google password.'
    },
    {
      icon: UserX,
      title: 'Your Rights',
      content: 'You can request deletion of your account and all associated data at any time by contacting us. You can export your focus data from the Settings page.'
    },
    {
      icon: Mail,
      title: 'Contact',
      content: 'For privacy-related questions, reach out to us at privacy@foci.digital'
    }
  ]

  return (
    <div className="fade-up">
      <PageHeader title="Privacy Policy" subtitle="Last updated: July 2026" />
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        {sections.map((section, index) => {
          const Icon = section.icon
          return (
            <div key={index} className="card fade-up" style={{ animationDelay: `${index * 0.05}s`, display: 'flex', gap: 16 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 'var(--radius-sm)',
                background: 'rgba(230, 194, 122, 0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0
              }}>
                <Icon style={{ color: 'var(--gold)', width: 24, height: 24 }} />
              </div>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>{section.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {section.content}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
