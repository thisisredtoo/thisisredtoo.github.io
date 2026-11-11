import { Link } from 'react-router-dom'

export default function WorkInProgress({
  title = 'Work in progress',
  message = "This page isn't finished yet. Please check back soon!",
  details = [],            // optional list, e.g. what's planned
  eta,                     // optional text, e.g. 'Expected: December 2026'
  variant = 'page',        // 'page' (full placeholder) or 'banner' (slim notice)
  backTo = '/',
  backLabel = 'Back to Home',
}) {
  // Slim notice to drop at the top of a page that is only partly finished
  if (variant === 'banner') {
    return (
      <div className="wip-banner" role="status">
        <span aria-hidden="true">🚧</span>
        <p>
          <strong>{title}:</strong> {message}
        </p>
      </div>
    )
  }

  // Full placeholder for a page with no real content yet
  return (
    <section className="wip">
      <div className="card wip-card">
        <div className="wip-stripe" aria-hidden="true" />

        <p className="wip-emoji" aria-hidden="true">🚧</p>
        <h2 className="wip-title">{title}</h2>
        <p className="wip-message">{message}</p>

        {details.length > 0 && (
          <ul className="wip-details">
            {details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        {eta && <p className="wip-eta">{eta}</p>}

        <Link to={backTo}>{backLabel}</Link>
      </div>
    </section>
  )
}