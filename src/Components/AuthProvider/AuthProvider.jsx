import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../Fireebase';


export const AuthContext=createContext(null)
const googleprovider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
 const googlelogin=()=>{
   return signInWithPopup(auth,googleprovider)
 }

    const authinfo={
     googlelogin
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;