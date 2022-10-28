import React from 'react'
import { Link } from 'react-router-dom'

function NavLinks() {
  return (
    <div className="nav">
      <Link to="/" className="links">Users</Link> 
      <span>|</span>
      <Link to="user/:userId" className="links">User</Link>
    </div>
  )
}

export default NavLinks