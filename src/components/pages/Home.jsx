import React, { useEffect } from 'react'
import Navbar from '../comp/Navbar'
import HeroSection from '../comp/HeroSection'
import Footer from '../comp/Footer'
// import { Link } from 'react-router-dom'

export default function HomePage() {
  useEffect(() => {
    document.body.setAttribute("data-bs-theme", "dark")
  }, [])
  return (
    <main>
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="navbar">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Pokit Code</a>
      <a className="btn nav-link px-2 btn-outline-dark" aria-current="page" href="https://s5sajid.github.io" target='_blank'>By S5 SAJID</a>
    </div>
    </nav>
    
    <HeroSection />
    <Footer />
    </main>
  )
}
