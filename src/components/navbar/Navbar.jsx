import React, {useState} from 'react'
import {FaBars, FaTimes, FaFacebook, FaInstagram} from 'react-icons/fa'
import {GiCarWheel} from 'react-icons/gi'
import './Navbar.css'
import { Link } from 'react-scroll'
import logo1 from '../../assets/ferrari-2-logo-svgrepo-com.svg'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const[slide, setSlide] = useState(false);

  const navbarHandler = () => {
      setNav(!nav)
    //   setSlide(!slide)
    } 

   const closeNavbar = () =>{
       setNav(!nav)
   }
  

 
  






  return (
    <div className='navbar'>
        <div className="container">
            <div className={slide? 'logo slide-right': 'logo'}>
                <h3>Ferrari</h3>
            </div>
            <ul className={nav? 'navbar-menu active' : 'navbar-menu'}>
            <li><a href="/"><Link onClick={closeNavbar} activeClass="active" to="speed" spy={true} smooth={true} duration={500}>Speed</Link></a></li>
            <li><a href="/"><Link onClick={closeNavbar}  activeClass="active" to="handling" spy={true} smooth={true} duration={500}>Handling</Link></a></li>
            <li><a href="/"><Link onClick={closeNavbar}  activeClass="active" to="options" spy={true} smooth={true} duration={500}>Options</Link></a></li>
            <li><a href="/"><Link onClick={closeNavbar}  activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></a></li>
                {/* <li><a href="/">Power</a></li> */}
                {/* <li><a href="/">Speed</a></li>
                <li><a href="/">Handling</a></li>
                <li><a href="/">Options</a></li>
                <li><a href="/">Contact</a></li> */}

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