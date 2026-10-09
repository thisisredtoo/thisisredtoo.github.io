import { Link, useParams } from 'react-router-dom'
import { galleries } from '../data/galleries.js'

export default function Gallery() {
  const { slug } = useParams()
  const gallery = galleries[slug]

  if (!gallery) {
    return (
      <main className="content">
        <section>
          <p>Gallery not found.</p>
          <Link to="/play">Back to Play</Link>
        </section>
      </main>
    )
  }

  const base = import.meta.env.BASE_URL

  return (
    <main className="content">
      <section>
        <p style={{ marginBottom: '1rem' }}>
          <Link to="/play">Back to Play</Link>
        </p>
        <h2 className="section-title">{gallery.title}</h2>
        <p style={{ marginBottom: '2rem' }}>{gallery.intro}</p>

        <div className="projects">
          {gallery.items.map((item) => (
            <div className="card" key={item.file}>
              <h3>{item.title}</h3>
              <img
                className="project-image"
                src={encodeURI(`${base}${gallery.folder}/${item.file}`)}
                alt={`${item.title} illustration`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
