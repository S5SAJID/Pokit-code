import React from 'react'
import Navbar from '../comp/Navbar'
import {Link} from 'react-router-dom'

export default function HomePage() {
  return (
    <div className='w-100 vh-100 bg-dark'>
      <Navbar title="Pokit" project="Home"/>
      <Link to="/editor" className="btn btn-primary">Go to editor</Link>
    </div>
  )
}
