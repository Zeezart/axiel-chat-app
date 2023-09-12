import React from 'react'
import './all-chat.css'
import {Link} from 'react-router-dom'
import Header from '../Sub-Component/header/header'
import Chats from '../Sub-Component/chats/chats'
import Navbar from '../Navbar/Navbar'

function AllChat(){
    return(
        <div className='allChat'>
            <Header />
            <Link to='/chatbox'><Chats /></Link>
            <Link to='/chatbox'><Chats /></Link>
            
            <Navbar />
        </div>
    )
}

export default AllChat