import React, { useEffect } from 'react'
import { Link } from "react-scroll";
import { useState } from "react"; 
import { FiMenu, FiX } from "react-icons/fi"; 
import { Home } from './Home';
import { About } from './About';
import Project from './Project';
import { Skill } from './Skill';
import { Contact } from './Contact';

import { HiDownload } from "react-icons/hi";


export default function Navbar() {


    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    if (isMobile) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
 <header className={isMenuOpen ? 'nav nav-open' : 'nav'}>
        <nav className="nav__container" id="nav-menu">
          <div className="nav__logo">
            <Link to="about" smooth={true} onClick={toggleMenu}>
              LOGO
            </Link>
          </div>
          <div className="nav__toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FiX className="nav__icon" /> : <FiMenu className="nav__icon" />}
          </div>
          <ul className={isMenuOpen ? 'nav__menu nav__menu-open' : 'nav__menu'}>

          <li>
              <Link activeClass="active" smooth={true} spy={true} to="home"  onClick={toggleMenu}
               className="nav-link home">
              HOME
              </Link>
            </li>

            <li>
              <Link activeClass="active" smooth={true} spy={true} to="about"  onClick={toggleMenu}
              className="nav-link about"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                to="skills"
                onClick={toggleMenu}
                className="nav-link skills"
              >
                SKILLS
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth={true} spy={true} to="projects"  onClick={toggleMenu}
              className="nav-link projects"
              >
                PROJECT
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                to="contact"
                onClick={toggleMenu}
                className="nav-link contact"
              >
                CONTACT
              </Link>
              </li>

              <li>
              
              <button className="nav-link resume resume-btn">
                Resume <HiDownload/>
              </button>
             
              
            </li>
          </ul>
        </nav>
      </header>
      <section id="home" className='homebg'>
        <Home/>
      </section>
      <section id="about" className='aboutbg'>
        <About/>
      </section>
     
      <section id="skills">

        <Skill/>
      </section>
      <section id="projects">
        <Project/>
      </section>
     
      <section id="contact">
        <Contact/>
         </section>

    </div>
  )
}
