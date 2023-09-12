import React, { useRef, useState } from 'react'
import './sign-up.css'
import {Link} from 'react-router-dom'
import Axiel from '../../images/logo.png'
import { useAuth } from '../../context/AuthContext'
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { collection,addDoc } from "firebase/firestore";
// import { auth,db } from '../../firebase'


function SignIn(){

    //managing signup state
    const [signupDetail,setSignupDetail] = useState({
        displayName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    // FROM WEB DEV SIMPLIFIED
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef= useRef()
    const {signup, currentUser} = useAuth()

    
    function handleChange(e){
        const {name,value} = e.target
        setSignupDetail(
            prevValue => {
                return {
                    ...prevValue,
                    [name]: value
                }
            }
        )
    }
        
    const [error,setError] = useState("")
    const [loading, setLoading] = useState(false)
    //submitting form
    //FROM WEB DEV SIMPLIFIED
    async function handleSubmit (e){
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError(true)
        }

        try{
            setError("")
            await signup(emailRef.current.value, passwordRef.current.value)
            setLoading(true)
        }catch{
            setError("Failed to create an account")
        }
        setLoading(false)
    }

    
    return(
        <div className='container'>
            <div className='sign-up'>
                
                <div className='welcome-text'>
                    <h1>Join Axiel Now</h1>
                    <p>Create an account to start chatting.</p>
                </div>
                {currentUser}
                {error && console.log(error)}
                <form onSubmit={handleSubmit}>
                    <div className='input-details'>
                        
                        {/* <input 
                            placeholder='Username' 
                            type='text' 
                            name='displayName'
                            value={signupDetail.displayName}
                            onChange={handleChange}
                        /> */}
                        <input 
                            placeholder='Email Address' 
                            type='email' 
                            name='email'
                            value={signupDetail.email}
                            onChange={handleChange}
                            ref={emailRef}
                        />
                        <input 
                            placeholder='Password' 
                            type='password' 
                            name='password'
                            value={signupDetail.password}
                            onChange={handleChange}
                            ref={passwordRef}
                        />
                        <input 
                            placeholder='Confirm Password' 
                            type='password' 
                            name='confirmPassword'
                            value={signupDetail.confirmPassword}
                            onChange={handleChange}
                            ref={passwordConfirmRef}
                        />

                        {/* <input required style={{ display: "none" }} type="file" id="file" />
                        <label htmlFor="file">
                            {<img src={Axiel} alt="" />}
                            <span>Add an avatar</span>
                        </label> */}
                    </div>
                    <div className='signup-button'>
                        <button disabled={loading}>Create Account</button>
                        {error && <span>Somehting went wrong</span>}
                        {/* <Link to='/allchat'><button>Create Account</button></Link> */}
                        {/* <Link to='/signin'><p className='login'>Already have an account? Login</p></Link> */}
                    </div>
                </form>

                <div className='logo'>
                    <img src={Axiel} alt="Axiel Logo" />
                </div>
            </div>
        </div>
    )
}

export default SignIn