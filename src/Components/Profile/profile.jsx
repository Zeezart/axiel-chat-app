import React from 'react'
import { FaArrowLeft, FaCamera, FaEdit, FaEllipsisV } from 'react-icons/fa'
import profilePicture from "../../images/lara.jpg"
import './profile.css'

function Profile(){
    return(
        <div className='profile-section'>
            <div className='banner'>
                <div className='profile-icons'>
                    <FaArrowLeft />
                    <FaEllipsisV />
                </div>

                <img src={profilePicture} className='profile-picture'/>

                <div className='profileName'>
                    <h1>Adenike Azeez</h1>
                    <p>online</p>
                </div>

                <div>
                    <FaCamera className='profile-camera-icon'/>
                </div>
            </div>

            <div className='profile-info'>
                <div className='account'>
                    <h4>Account</h4>
                    <div className='account-categories'>
                        <p className='ques'>Name</p>
                        <p className='ans'>Adenike Azeez</p>
                    </div>

                    <div className='account-categories'>
                        <p className='ques'>Phone</p>
                        <p className='ans'>+234 1234567890</p>
                    </div>

                    <div className='account-categories'>
                        <p className='ques'>Bio</p>
                        <p className='ans'>Anywhere but the outside</p>
                    </div>

                    <FaEdit className='profile-edit-icon' />
                </div>

                <div className='account'>
                    <h4>Settings</h4>
                    <div className='account-categories'>
                        <p className='ques'>Privacy</p>
                        <p className='ans'>About, Security, Profile visits</p>
                    </div>

                    <div className='account-categories'>
                        <p className='ques'>Notification</p>
                        <p className='ans'>Messages, groups,calls</p>
                    </div>

                    <div className='account-categories'>
                        <p className='ques'>Storage and data</p>
                        <p className='ans'>Network usage, auto download</p>
                    </div>

                    <FaEdit className='profile-edit-icon' />
                </div>
            </div>
        </div>
    )
}

export default Profile