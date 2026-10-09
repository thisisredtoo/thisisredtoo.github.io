import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

// `target` = section id on the home page. 'top' scrolls to the top of the page.
// Links without a target (Play) are normal page navigation.
const links = [
  { label: 'Home', to: '/', target: 'top', key: 'home' },
  { label: 'Play', to: '/play', key: 'play' },
  { label: 'About', to: '/', target: 'about', key: 'about' },
  { label: 'Contact', to: '/', target: 'contact', key: 'contact' },
]

export function scrollToSection(id) {
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Navbar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  // Highlight the current page / section
  useEffect(() => {
    if (pathname === '/play') {
      setActive('play')
      return
    }
    if (pathname !== '/') {
      setActive(null)
      return
    }

    const update = () => {
      const about = document.getElementById('about')?.getBoundingClientRect()
      const contact = document.getElementById('contact')?.getBoundingClientRect()
      const line = 120 // roughly the navbar height plus a little room

      if (contact && contact.top < window.innerHeight * 0.6) setActive('contact')
      else if (about && about.top <= line && about.bottom > line) setActive('about')
      else if (about && about.top > line) setActive('home')
      else setActive(null) // between sections (Experience, Projects, Skills)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [pathname])

  const handleClick = (e, link) => {
    setOpen(false)
    if (!link.target) return // Play: let the router handle it

    e.preventDefault()
    if (pathname === '/') {
      scrollToSection(link.target)
    } else {
      // Go home first; Home.jsx reads this state and scrolls
      navigate('/', { state: { scrollTo: link.target } })
    }
  }

  return (
    <header className="navbar">
      <nav className="navbar-inner" aria-label="Main">
        <Link to="/" className="navbar-brand" onClick={(e) => handleClick(e, links[0])}>
          Erika Alvarez
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? '✕' : '☰'}
        </button>

        <ul id="nav-links" className={`nav-links${open ? ' open' : ''}`}>
          {links.map((link) => (
            <li key={link.key}>
              <Link
                to={link.to}
                className={active === link.key ? 'active' : ''}
                aria-current={active === link.key ? 'page' : undefined}
                onClick={(e) => handleClick(e, link)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
