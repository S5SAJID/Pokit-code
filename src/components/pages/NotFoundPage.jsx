import React from 'react'
import {Link} from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className='w-100 flex-column vh-100 gap-5 d-flex align-items-center bg-dark justify-content-center'>
        <h1 className='text-light'>Page Not Found<span className='text-warning'>.</span></h1>
        <Link to="/" className="btn btn-primary">Lets Go to Home</Link>
    </div>
  )
}
