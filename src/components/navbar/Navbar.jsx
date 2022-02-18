import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wrt">Who Is She?</a></p>
    <p><a href="#possibility">Contact</a></p>
    <p><a href="#features">Experience</a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='reactTest__navbar'>
      <div className='reactTest__navbar-links'>

        {/* <div className='reactTest__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div> */}

        <div className='reactTest__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='reactTest__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }

        {toggleMenu && (
          <div className='reactTest__navbar-menu_container scale-up-center'>
            <div className='reactTest__navbar-menu_container-links'>
              <Menu />
              <div className='reactTest__navbar-menu_container-links-sign'></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;
