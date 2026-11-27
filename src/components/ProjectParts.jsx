// Shared building blocks for project pages.
// They only output class names; ALL styling lives in each project's own .css file.

const asset = (path) => encodeURI(`${import.meta.env.BASE_URL}${path}`)

// Shows the image if `src` is given, otherwise the grey placeholder box.
// src goes in /public and is written WITHOUT a leading slash,
// e.g. src="projects/attendance-tracker/banner.png"
export function Img({ src, alt = '', className }) {
  if (src) return <img className={className} src={asset(src)} alt={alt} loading="lazy" />
  return <div className={`${className} is-placeholder`} aria-hidden="true" />
}

// Page frame: banner, title, summary and the Role/Timeline/Tools/Skills row.
// `className` is the project's own root class (e.g. "attendance-tracker"),
// which its CSS file uses to scope every rule to that one page.
export function ProjectLayout({
  className,
  title,
  summary,
  thumbnail,
  thumbnailAlt,
  meta = [],
  children,
}) {
  return (
    <main className={className}>
      <div className="project-inner">
        <header className="project-header">
          <h1 className="project-title">{title}</h1>
          {summary && <p className="project-summary">{summary}</p>}

          {meta.length > 0 && (
            <dl className="project-meta">
              {meta.map(([label, value]) => (
                <div key={label} className="project-meta-item">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          )}
        </header>

        <Img className="project-thumbnail" src={thumbnail} alt={thumbnailAlt} />

        <div className="project-content">{children}</div>
      </div>
    </main>
  )
}

// A content block: blue label, optional big heading, then whatever you put inside.
export function Block({ label, heading, children }) {
  return (
    <div className="project-block">
      {label && <h2 className="project-label">{label}</h2>}
      {heading && <h3 className="project-heading">{heading}</h3>}
      {children}
    </div>
  )
}

// Wrap paragraphs in <Body> for the right spacing
export function Body({ children }) {
  return <div className="project-body">{children}</div>
}

// Wrap <Feature> items in this
export function Features({ children }) {
  return <div className="project-features">{children}</div>
}

// Image on the left, numbered text on the right. Number is set with `n`.
export function Feature({ n, title, image, alt, children }) {
  return (
    <div className="project-feature">
      <Img className="project-feature-img" src={image} alt={alt} />
      <div className="project-feature-text">
        <span className="project-feature-num">{String(n).padStart(2, '0')}</span>
        <p className="project-feature-title">{title}</p>
        <p className="project-feature-desc">{children}</p>
      </div>
    </div>
  )
}

// Row of screens: <Shots><Shot src="…" alt="…" /><Shot /></Shots>
export function Shots({ children }) {
  return <div className="project-shots">{children}</div>
}
export function Shot({ src, alt }) {
  return <Img className="project-shot" src={src} alt={alt} />
}
