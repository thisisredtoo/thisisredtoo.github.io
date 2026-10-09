import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Play from './pages/Play.jsx'
import Gallery from './pages/Gallery.jsx'

// Start every page at the top, unless the navbar asked to scroll to a section
function ScrollToTop() {
  const { pathname, state } = useLocation()
  useEffect(() => {
    if (!state?.scrollTo) window.scrollTo(0, 0)
  }, [pathname, state])
  return null
}

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/gallery/:slug" element={<Gallery />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}
