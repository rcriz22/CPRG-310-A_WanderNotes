import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from '../assets/WanderLogo.png';
import '../component/Navbar.css';

function Navbar() {

    const [ navibarOpen, setnavibarOpen] = useState();

    return (
        <>
        {/* This is for the Navigation Bar */}
        <nav className="navbar">
            {/* This is Logo */}
            <div className="logo">
                <NavLink to ="/" onClick={()=> setnavibarOpen()}>
                 <img src={Logo} alt="Wander Notes Logo" />
                </NavLink>
            </div>

             {/* This is for the Hamburger Menu */}
            <div className={`ham-menu ${navibarOpen ? 'open' :''}`} onClick={() => setnavibarOpen(!navibarOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* This is navigation menu */}
            <div className={`navitem ${navibarOpen ? 'open': ''}`}>
                 {/* <NavLink to='/home'>Home</NavLink> */}
                <NavLink to='/about' onClick={()=> setnavibarOpen()}>About</NavLink>
                <NavLink to='/blog' onClick={()=> setnavibarOpen()}>Blog</NavLink>
                <NavLink to='/places' onClick={()=> setnavibarOpen()}>Places</NavLink>
            </div>
        </nav>
        </>
    );
}

export default Navbar;  