import { Link } from 'react-router-dom'

// The only tags used across the site, and the color each one always gets.
// Keys are the exact text you write in a project's `tags` array.
const TAG_STYLES = {
  'web application': '#e58fb0',   // pink
  'personal':        '#1f8a80',   // teal
  'ui/ux design':    '#b39ddb',   // lavender
  'graphic design':  '#e0a458',   // amber
}

// Used if you type a tag that isn't listed above
const DEFAULT_TAG_COLOR = '#6b7280'

export default function Card({
  title,
  url,
  urlLabel = 'GitHub',   // text for the external link when a project page also exists
  role,
  period,
  tags = [],             // ['project', 'ui/ux design'] or [{ label, color }]
  description = [],      // first item is the bold gray tagline
  page,                  // slug of a page in ProjectPage.jsx, e.g. 'attendance-tracker'
  gallery,               // legacy name for `page`, still accepted
  image,
  imageAlt,
  comingSoon = false,    // true shows the badge in the top-left of the image
  badgeText = 'Coming soon',
}) {
  const slug = page || gallery

  // With a project page, the title link is stretched over the whole card (see the CSS).
  // With only an external url, it stays an ordinary title link.
  const titleLink = slug ? (
    <Link className="card-stretched" to={`/project/${slug}`}>
      {title}
    </Link>
  ) : url ? (
    <a href={url} target="_blank" rel="noreferrer">
      {title}
    </a>
  ) : (
    title
  )

  return (
    <article className={`card${slug ? ' card--linked' : ''}`}>
      <div className={`card-media${image ? '' : ' card-media--empty'}`}>
        {image && (
          <img
            src={`${import.meta.env.BASE_URL}${image}`}
            alt={imageAlt || `${title} preview`}
            loading="lazy"
          />
        )}

        {comingSoon && <span className="card-badge">{badgeText}</span>}
      </div>

      {/* Title and period share one row */}
      <div className="card-header">
        <h3 className="card-title">{titleLink}</h3>
        {period && <span className="card-period">{period}</span>}
      </div>

      {role && <h4 className="card-role">{role}</h4>}

      {description.map((text, i) => (
        <p key={i} className="card-description">
          {text}
        </p>
      ))}

      {tags.length > 0 && (
        <ul className="card-tags">
          {tags.map((tag) => {
            const label = typeof tag === 'string' ? tag : tag.label
            const color =
              (typeof tag === 'object' && tag.color) ||
              TAG_STYLES[label.toLowerCase()] ||
              DEFAULT_TAG_COLOR
            return (
              <li key={label} style={{ color }}>
                {label}
              </li>
            )
          })}
        </ul>
      )}
    </article>
  )
}