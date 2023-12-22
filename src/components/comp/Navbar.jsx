import React from 'react'

export default function Navbar({title, project}) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
    <div className="container-fluid">
      <a className="navbar-brand opacity-50" href="/">{title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <p className="nav-brand mx-auto text-light my-auto" style={{fontFamily: "Space Grotesk", alignSelf: "center"}}>{project}</p>

      <ul className="navbar-nav gap-2 me-4 mb-2 mb-sm-0">
          <li className="nav-item badge p-2 d-flex align-items-center text-dark-emphasis border border-dark-subtle rounded-circle" title='Home'>
            <i className='ri-home-line text-light'/>
          </li>
          <li className="nav-item badge p-2 d-flex align-items-center text-dark-emphasis border border-dark-subtle rounded-circle" title='Home'>
            <i className='ri-home-line text-light'/>
          </li>
        </ul>
      
    </div>
  </nav>
  )
}
