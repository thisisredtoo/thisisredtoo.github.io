import { Link } from 'react-router-dom'

export default function Card({
  title,
  url,
  urlLabel = 'GitHub',   // text for the external link when a gallery also exists
  role,
  period,
  description = [],
  gallery,
  image,
  imageAlt,
}) {
  // Title goes to the gallery if there is one, otherwise to the external link
  const titleLink = gallery ? (
    <Link to={`/gallery/${gallery}`}>{title}</Link>
  ) : url ? (
    <a href={url} target="_blank" rel="noreferrer">
      {title}
    </a>
  ) : (
    title
  )

  return (
    <div className="card">
      {image && (
        <img
          className="card-image"
          src={`${import.meta.env.BASE_URL}${image}`}
          alt={imageAlt || `${title} preview`}
          loading="lazy"
        />
      )}

      <h3>{titleLink}</h3>
      {role && <h4>{role}</h4>}
      {period && <h5>{period}</h5>}

      {description.map((text, i) => (
        <p key={i}>{text}</p>
      ))}

      {gallery && url && (
        <p>
          <a href={url} target="_blank" rel="noreferrer">
            {urlLabel} ↗
          </a>
        </p>
      )}
    </div>
  )
}