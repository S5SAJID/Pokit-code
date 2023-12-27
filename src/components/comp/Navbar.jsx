import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({title, project}) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
    <div className="container-fluid">
      <Link className="navbar-brand opacity-50" to="/">{title} <span class="badge text-info-emphasis bg-info-subtle rounded-pill">Construction</span>
    </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <p className="nav-brand mx-auto text-light my-auto" style={{fontFamily: "Space Grotesk", alignSelf: "center"}}>{project}</p>

      <ul className="navbar-nav gap-2 me-4 mb-2 mb-sm-0">
          <li className="nav-item" title='Home' >
            <button className='btn btn-sm btn-outline-secondary rounded-pill ri-add-line text-light' style={{aspectRatio: "1"}}></button>
          </li>
          <li className="nav-item" title='Home' >
            <button className='btn btn-sm btn-outline-secondary rounded-pill ri-menu-line text-light' style={{aspectRatio: "1"}}></button>
          </li>
        </ul>
      
    </div>
  </nav>
  )
}
