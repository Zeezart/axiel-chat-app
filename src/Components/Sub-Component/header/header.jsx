import React from 'react'
import './header.css'
import { FaSearch, FaEllipsisV, FaEllipsisH } from 'react-icons/fa'

function Header(){
    return(
        <>
            <div className='header'>
                <img src='src/images/logo.svg' />
                <h1>Chats</h1>
                <div>
                    <FaSearch className='header-icons'/>
                    <FaEllipsisV className='header-icons'/>
                </div>
            </div>
        </>
    )
}

export default Header