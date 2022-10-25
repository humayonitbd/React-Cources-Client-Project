import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);


    const createUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const profileUpdateHandler =(profile)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    const signInHandler =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutHandler =()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, currentUser =>{
            console.log('currentUser is ', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return()=>unsubcribe();
    },[])





    const authInfo = {user, loading, createUser, logOutHandler, profileUpdateHandler, signInHandler};

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;