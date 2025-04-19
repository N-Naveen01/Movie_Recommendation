import React from 'react'
import img from "../assets/notfound.jpeg"
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
  return (
    <div className="container">
      <img src={img} className="img-fluid" />
      <p className="text-center">
        <Link to="/" className="btn btn-danger my-2">GoTo Home Page</Link>
      </p>
    </div>
  )
}

