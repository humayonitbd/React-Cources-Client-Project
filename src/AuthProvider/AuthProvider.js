import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

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

    const providerGoogle = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider();

    const googleLogIn=()=>{
        setLoading(true)
       return signInWithPopup(auth, providerGoogle)
    }

    const handlerGithubLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth, providerGithub)
    }

    const changePasswordHandler = (email)=>{
        setLoading(true)
       return sendPasswordResetEmail(auth, email)
    }


    const authInfo = {user, loading, createUser, changePasswordHandler, handlerGithubLogin, googleLogIn, logOutHandler, profileUpdateHandler, signInHandler};

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;