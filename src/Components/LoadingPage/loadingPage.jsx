import React from 'react'
import './loading-page.css'
import Logo from '../Sub-Component/logo/logo'

function LoadingPage(){
    return(
        <section>
            <div className='logo'>
                <Logo />
                <h1 className='axiel'>Axiel</h1>
            </div>
        </section>
    )
}

export default LoadingPage