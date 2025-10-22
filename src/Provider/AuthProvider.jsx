import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { CgPassword } from 'react-icons/cg';
export const AuthContext = createContext();

    const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    // updated user
    const updatedUser =(updatedData) =>{
        return updateProfile(auth.currentUser , updatedData)
    }

    // laoding
    const [loading , setLoading] = useState(true);

    // new user register
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // sign out the in user
    const signInOut = ()=>{
        return signOut(auth)
    }


    // login user 
    const loginUser = (email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }


    // set a observer that saw user sign in or not
    useEffect(() =>{
      const unsubscribe =  onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser)
            setLoading(false);
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
        loginUser,
        loading,
        setLoading,
        updatedUser,
    }
    return <AuthContext value={authData}>{children}</AuthContext>

};

export default AuthProvider;