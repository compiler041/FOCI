import { useAuth } from '../context/AuthContext'

export default function PageHeader({ title, subtitle, action }) {
  const { user } = useAuth()

  return (
    <header className="page-header">
      <div>
        <h1>{title}</h1>
        {subtitle && <p className="page-header-sub">{subtitle}</p>}
      </div>
      {action && action}
    </header>
  )
}
