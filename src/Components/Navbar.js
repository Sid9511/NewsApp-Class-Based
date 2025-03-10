/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';



export class Navbar extends Component {

    render() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">NewsReport</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li  className="nav-item"><Link className="nav-link" to='/home'>Home</Link></li>
                    <li  className="nav-item"><Link className="nav-link" to='/general'>General</Link></li>
                    <li  className="nav-item"><Link className="nav-link" to='/business'>Business</Link></li>
                    <li  className="nav-item"><Link className="nav-link" to='/technology'>Technology</Link></li>
                    <li  className="nav-item"><Link className="nav-link" to='/science'>Science</Link></li>
                    <li  className="nav-item"><Link className="nav-link" to='/sports'>Sports</Link></li>
                    <li  className="nav-item"><Link className="nav-link" to='/health'>Health</Link></li>
                    <li  className="nav-item"><Link className="nav-link" to='/entertainment'>Entertainment</Link></li>
                    
                </ul>
                </div>
            </div>
            </nav>
      </>
    )
  }
}

export default Navbar
