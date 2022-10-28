import React from "react"
import { Link } from "react-router-dom"

function ErrorPage() {
  return (
    <div className="error">
      <h2>404 Page</h2>
      <p>Sorry, this page cannot be found</p>
      <Link to="/">Return to the home page</Link>
    </div>
  )
}

export default ErrorPage