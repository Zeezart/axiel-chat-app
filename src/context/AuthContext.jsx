import React, { useContext, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {auth} from '../firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {

    const [currentUser, setCurrentUser] =useState()

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email,password)
    }

    useEffect(() => {
        // const auth = getAuth()
        // const stateChanged = onAuthStateChanged()
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        console.log(currentUser)
        return unsubscribe
    },[])
    const value = {
        currentUser,
        signup
    }
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}