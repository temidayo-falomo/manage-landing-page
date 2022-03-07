import React from 'react'
import './Header.css'

const Header = () => {
  return <header>
      <div className="header-container">
          <div className="left-header">
                <h1>Bring everyone together to build better products.</h1>
                <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                <button className='btn'>Get started</button>
            </div>
            <div className="right-header">
                <img src='./images/illustration-intro.svg' alt='' />
            </div>
      </div>
  </header>
}

export default Header