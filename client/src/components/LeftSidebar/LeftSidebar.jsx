import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'

function leftSidebar() {
  return (
    <div className='left-sidebar'>
      <div className='side-nav'>
        <NavLink to='/' className='side-nav-links' activeclassname='active'>
          <p style={{ paddingLeft: "10px" }}>Feed</p>
        </NavLink>
        <div className='side-nav-div'>
          <NavLink to='/Statuses' className='side-nav-links' activeclassname='active'>
            <p style={{ paddingLeft: "10px" }}>Statuses</p>
          </NavLink>
          <NavLink to='/Users' className='side-nav-links' style={{ paddingLeft: "20px" }}>
            <p>Others</p>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default leftSidebar