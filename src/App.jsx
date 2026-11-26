import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Play from './pages/Play.jsx'
import About from './pages/About.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import Footer from './components/Footer.jsx'

// Start every page at the top, unless the navbar asked to scroll to a section
function ScrollToTop() {
  const { pathname, state } = useLocation()
  useEffect(() => {
    if (!state?.scrollTo) window.scrollTo(0, 0)
  }, [pathname, state])
  return null
}

// Optional: old /gallery/<slug> links keep working by forwarding to the project page
function GalleryRedirect() {
  const { slug } = useParams()
  return <Navigate to={`/project/${slug}`} replace />
}

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
        <Route path="/gallery/:slug" element={<GalleryRedirect />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}