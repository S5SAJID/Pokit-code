import React, { useEffect } from 'react'
import Navbar from '../comp/Navbar'
// import { Link } from 'react-router-dom'

export default function HomePage() {
  useEffect(() => {
    document.body.setAttribute("data-bs-theme", "dark")
  }, [])
  return (
    <main>
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Offcanvas navbar large">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Pokit Code</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end text-white bg-dark" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarLgDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarLgDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex mt-3 mt-lg-0" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  </nav>

    <div className="px-4 pt-5 py-5 text-center border-bottom bg-dark">
      <div className='py-5'></div>
      <h1 className="display-4 fw-bold lh-0 mb-5 text-body-emphasis container-sm gradient-text">Light Code Editor</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-5">Say hello to Pokit Code.</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <a href="/editor" class="new_button_outer">
          <div class="new-button-inner">
            <p id="top-cta-button" class="new_button_text inner bigger">Get Started Now</p>
          </div>
        </a>
        </div>
      </div>
      <div className="overflow-hidden" style={{maxHeight: "30vh"}}>
        <div className="container px-5">
          <img src="../../../public/assets/images/show.png" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Preview" width="700" height="500" />
        </div>
      </div>
    </div>
    </main>
  )
}
