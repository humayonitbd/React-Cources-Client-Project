import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({displayName:'Humayon'})


    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const profileUpdateHandler =(profile)=>{
        return updateProfile(auth.currentUser, profile)
    }

    const signInHandler =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }





    const authInfo = {user, createUser, profileUpdateHandler, signInHandler};

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;