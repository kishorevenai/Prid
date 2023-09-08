import React, { useState } from 'react'
import favicon from '../assets/favicon.svg'
import './components.css'
import  Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    const [Hamburger , setHamburger] = useState(false)
    
   return (
      <div className='header'>
        <div className='header-inner container'>
          <img className='favicon' src={favicon}></img>
          <div className='hamburger' onClick={() => setHamburger(prev => !prev)}></div>
          <div className={Hamburger ? 'navlink active':'navlink'}>
            <div className='burger-inner'>
               <div>Home</div>             
               <div>Problem solver</div>
               <div>Redefining solutions</div>
               <div>Innovative solutionist</div>
               <div>Data innovation</div>
               <div>Contact</div>
            </div>
          </div>
        </div>
      </div>
   )
}

export default Header
