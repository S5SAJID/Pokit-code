import React from 'react'
import {Link} from 'react-router-dom'
import preview from './show.png'

export default function HeroSection() {
  return (
    <div className="px-4 pt-5 py-5 text-center bg-dark">
    <div className='py-5'></div>
    <h1 className="display-4 fw-bold lh-0 mb-5 text-body-emphasis container-sm gradient-text">Light Code Editor</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-5">Say hello to Pokit Code.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
      <Link to="/editor" class="new_button_outer">
        <div class="new-button-inner">
          <p id="top-cta-button" class="new_button_text inner bigger">Get Started Now</p>
        </div>
      </Link>
      </div>
    </div>
    <div className="overflow-hidden" style={{maxHeight: "40vh"}}>
      <div className="container px-5">
        <img src={preview} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Preview" width="700" height="500" />
      </div>
    </div>
  </div>
  )
}
