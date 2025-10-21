import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { CgPassword } from 'react-icons/cg';
export const AuthContext = createContext();

    const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    // new user register
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // sign out the in user
    const signInOut = ()=>{
        return signOut(auth)
    }


    // login user 
    const loginUser = (email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }


    // set a observer that saw user sign in or not
    useEffect(() =>{
      const unsubscribe =  onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser)
        });
        return () =>{
            unsubscribe()
        }
    },[])

    // sharing data using context api
    const authData = {
        user,
        setUser,
        createUser,
        signInOut,
        loginUser
    }
    return <AuthContext value={authData}>{children}</AuthContext>

};

export default AuthProvider;