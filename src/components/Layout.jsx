import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'

export default function Layout() {
  const { pathname } = useLocation()

  // Start each page at the top when navigating
  useEffect(() => window.scrollTo(0, 0), [pathname])

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
