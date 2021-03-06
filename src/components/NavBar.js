import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  const navbar={
    fontSize:'16px'
  }
  
    return (
      <div>
        <nav
        class=" navbar navbar-expand-lg navbar-dark bg-dark shadow"
        
      >

        <div class="container">

          <a href="/" class="navbar-brand">
            
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbar-responsive"
            aria-expanded="false"
            aria-abel="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto " >
              <li class="nav-item active" >
                <Link to="/" class="nav-link">
                  <i class="fas fa-home"></i>
                  <span class="p-2" style={navbar}>Home</span>
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/activities" class="nav-link">
                  <span class="p-2" style={navbar}>Activities</span>
                </Link>
              </li>
              <li class="nav-item">
                <a href="updates" class="nav-link">
                  <span class="p-2" style={navbar}>Updates</span>
                </a>
              </li>
              
              <li class="nav-item">
                <a href="/about-us" class="nav-link">
                  <span class="p-2" style={navbar}>About Us</span>
                </a>
              </li>

              <li class="nav-item">
                <a href="/contact" class="nav-link">
                
                  <span class="p-2" style={navbar}>Contact Us</span>
                </a>
              </li>
              
              
            </ul>
          </div>
        </div>
       
      </nav>
     
      </div>
    )
  }

export default NavBar
