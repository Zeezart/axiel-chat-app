import React from 'react'
import './navbar.css'
import { FaCamera, FaPhone, FaComment, FaUser, FaBell } from 'react-icons/fa'

function Navbar(){
    return(
        <div className='navbar-wrapper'>
            <div className='navbar'>
                <FaCamera className='nav-icon '/>
                <FaPhone className='nav-icon'/>
                <FaComment className='nav-icon active'/>
                <FaBell className='nav-icon'/>
                <FaUser className='nav-icon'/>
            </div>
        </div>
    )
}

export default Navbar