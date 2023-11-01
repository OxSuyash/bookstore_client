import React from 'react'
import { Link } from "react-router-dom"
import "../styles/Header.scss"
import axios from 'axios'
import { server } from '../App'



const Header = () => {

    const toggleMenu = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    return (
        <header>
            <nav className='navbar' >
                <Link to={"/"} className="nav-branding">SUYASH.</Link>

                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <Link to={"/"} className="nav-link" onClick={toggleMenu}><p>Home</p></Link>
                    </li>

                    <li className='nav-item'>
                        <Link to={"/about"} className="nav-link" onClick={toggleMenu}><p>About</p></Link>
                    </li>

                    <li className='nav-item'>
                        <Link to={"/allbooks"} className="nav-link" onClick={toggleMenu}><p>demo getAllbooks</p></Link>
                    </li>

                    <li className='nav-item'>
                        <Link to={"/contact"} className="nav-link" onClick={toggleMenu}><p>Contact</p></Link>
                    </li>

                    <li className='nav-item'>
                        <Link to={"/login"} className="nav-link" onClick={toggleMenu}><p>Login</p></Link>
                    </li>

                </ul>

                <div className="hamburger " onClick={toggleMenu} >
                    <span className="bar" ></span>
                    <span className="bar" ></span>
                    <span className="bar" ></span>
                </div>

                <div className="header-search">
                  <Link to={"/search"} ><p>search</p></Link>
                </div>

            </nav>
        </header>
    )
}

export default Header