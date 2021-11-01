import './Navbar.css'
import avatar from '../../assets/avatar.svg';
import React from 'react';


const Navbar = ({sidebarOpen, openSidebar}) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>

            <div className="navbar__left">
                <a href="#" className="active_link">Início</a>
           </div>

            <div className="navbar__right">

                

            </div>

        </nav>
    )
}

export default Navbar;