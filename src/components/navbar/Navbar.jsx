import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { RiCloseLine} from 'react-icons/ri';
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  return (
    <nav>
        
      <div className="nav-container">
        <div className="mobile-container">
          <img src='./images/logo.svg' alt='' className='logo'/>
          <div className='menu-item' onClick={handleClick}>
              {click ? <RiCloseLine className='hamburger' /> : <GiHamburgerMenu  className='hamburger'/>}
          </div>
        </div>

        <div className={click ? 'sidebar active' : 'sidebar'}>
        <ul className="nav-links">
          <li><a href='/'>Pricing</a></li>
          <li><a href='/'>Products</a></li>
          <li><a href='/'>About Us</a></li>
          <li><a href='/'>Careers</a></li>
          <li><a href='/'>Community</a></li>
        </ul>
      </div>

      <button className='btn'>Get Started</button>

      <img src='./images/bg-tablet-pattern.svg' alt='' className='pattern-top' />
      {/* <img src='./images/bg-tablet-pattern.svg' alt='' className='sec-pattern-top' /> */}
      </div>
    </nav>
  )
}

export default Navbar