import React from 'react'
import {Link} from 'react-router-dom'
function NavBar() {
  return (
    
   <nav className="navbar navbar-expand-lg navbar-dark  bg-dark  mb-5">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}>Student Management System</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="view-student">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={"/add-student"}>Add Student</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar
