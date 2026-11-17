import { Link, useParams } from 'react-router-dom'
import { projectPages } from './projects/index.js'

// Picks the right project page from the URL. Each project has its own
// page + stylesheet in pages/projects/, registered in pages/projects/index.js.
export default function ProjectPage() {
  const { slug } = useParams()
  const Page = projectPages[slug]

  if (!Page) {
    return (
      <main className="content">
        <section>
          <p>Project not found.</p>
          <Link to="/" state={{ scrollTo: 'projects' }}>Back to projects</Link>
        </section>
      </main>
    )
  }

  return <Page />
}