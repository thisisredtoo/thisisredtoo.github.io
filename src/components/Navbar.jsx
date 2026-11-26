import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

// `target` = section id on the home page. 'top' scrolls to the top of Home.
// Links without a target (play, about) are normal page navigation.
const links = [
  { label: 'work', to: '/', target: 'top', key: 'home' },
  { label: 'play', to: '/play', key: 'play' },
  { label: 'about', to: '/about', key: 'about' },
  {
    label: 'resume',
    href: 'https://drive.google.com/file/d/1MwC1xr2QMHMH82aTwsyzE1RrWL4XP5V1/view?usp=drive_link',
    key: 'resume',
  },
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

  // Which link is highlighted depends only on the current page
  const active =
    pathname === '/'
      ? 'home'
      : pathname === '/play'
        ? 'play'
        : pathname === '/about'
          ? 'about'
          : null

  const handleClick = (e, link) => {
    setOpen(false)
    if (!link.target) return // play / about: let the router handle it

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
          <img
            className="navbar-logo"
            src={`${import.meta.env.BASE_URL}logo icon.png`}
            alt="Erika Alvarez"
          />
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
              {link.href ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.to}
                  className={active === link.key ? 'active' : ''}
                  aria-current={active === link.key ? 'page' : undefined}
                  onClick={(e) => handleClick(e, link)}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}