import React from 'react';
import './chats.css'

function Chats(){
    return(
        <>
            <div className='single-chat'>
                <div className='chat-preview'>
                    <img src='src/images/lara.jpg' />
                    <div className='contact-info'>
                        <h2>Lara</h2>
                        <p>Hello.How are you doing?</p>
                    </div>
                </div>
                <div className='time-unread'>
                    <p className='time'>8:07pm</p>
                    <p className='unread'>2</p>
                </div>
            </div>
        </>
    )
}

export default Chats