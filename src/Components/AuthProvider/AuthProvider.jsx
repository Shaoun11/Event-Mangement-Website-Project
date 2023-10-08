import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithEmailLink, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Fireebase';


 export const Authcontext=createContext(null);
const googleprovider=new GoogleAuthProvider();
const githubprovider=new GithubAuthProvider();



const Authrovider = ({children}) => {
  const [user,setuser]=useState(null);
  const createuser=(email,password)=>{
    
    return createUserWithEmailAndPassword(auth,email,password)
    }

    
    const handleUpdateProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
          displayName: name, photoURL: photo
      })
  }
    const userlogin=(email,password)=>{
      
    return signInWithEmailAndPassword(auth,email,password)
    }

    const googlelogin=()=>{
      
     return signInWithPopup(auth,googleprovider)
    }
    const githublogin=()=>{
      
     return signInWithPopup(auth,githubprovider)
    }

   const logout=()=>{
    
    return signOut(auth)
   }

  useEffect(()=>{
   
    onAuthStateChanged(auth, (user) => {
      setuser(user)
     
    });

  },[]);
  
  const Authinfo={
    createuser,
    userlogin,
    user,
    googlelogin,
    logout,githublogin,handleUpdateProfile
   }
  console.log(user);
    return (
        <Authcontext.Provider value={Authinfo}>
         {children}
        </Authcontext.Provider>
    );
};

export default Authrovider;