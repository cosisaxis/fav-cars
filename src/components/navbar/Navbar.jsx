import React, {useState} from 'react'
import {FaBars, FaTimes, FaFacebook, FaInstagram} from 'react-icons/fa'
import {GiCarWheel} from 'react-icons/gi'
import './Navbar.css'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navbarHandler = () => setNav(!nav)
  






  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                <h3>Speeder</h3>
            </div>
            <ul className={nav? 'navbar-menu active' : 'navbar-menu'}>
                <li><a href="/">Power</a></li>
                <li><a href="/">Power</a></li>
                <li><a href="/">Power</a></li>
                <li><a href="/">Power</a></li>
                <li><a href="/">Power</a></li>

                <div className="mobile-menu">
                    <button>shop</button>
                    <button>account</button>
                    <div className="social-media">
                        <FaFacebook  className='icon'/>
                        <FaInstagram className='icon'/>
                        <GiCarWheel className='icon' />

                    </div>
                </div>
            </ul>
            <ul className="navbar-menu disappear">
                <li><a href="/">Power</a></li>
                <li><a href="/">Power</a></li>
            </ul>
            <div className="hamburg" onClick={navbarHandler}>
                {nav? (<FaTimes  style={{ color: '#ffffff'}}/>) : (<FaBars  style={{ color: '#ffffff'}} />) }
            </div>
        </div>
    </div>
  )
}

export default Navbar