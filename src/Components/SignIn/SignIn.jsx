import React,{ useState } from 'react'
import './sign-in.css'
import {Link} from 'react-router-dom'
import Axiel from '../../images/logo.png'


function SignIn(){
    //managing inputs states

    const [loginDetail,setLoginDetail] = useState({
        email:"",
        password:""
    })

    function handleChange(e){
        const {name,value} = e.target
        setLoginDetail(
            prevValue => {
                return {
                    ...prevValue,
                    [name]: value
                }
            }
        )
    }

    function handleSubmit(e){
        e.preventDefault()
        alert("loginDetail")
    }
    return(
        <div className='container'>
            <div className='sign-in'>
                
                <div className='welcome-text'>
                    <h1>Welcome Back!</h1>
                    <p>Enter your details</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className='input-details'>
                        <input 
                            placeholder='Email Address' 
                            type='email' 
                            name='email' 
                            onChange={handleChange}
                            value={loginDetail.value}
                        />

                        <input 
                            placeholder='Password' 
                            type='password' 
                            name='password' 
                            onChange={handleChange}
                            value={loginDetail.value}
                        />

                        <p className='forgot-password'>Forgot Password</p>
                    </div>

                    <div className='login-button'>
                        <Link to='/allchat'><button type='submit'>Login</button></Link>
                        <Link to='/'><p className='sign-up-button'>Don't have an account? Sign Up</p></Link>
                    </div>
                </form>

                <div className='logo'>
                    <img src={Axiel} />
                </div>
            </div>
        </div>
    
    )
}

export default SignIn