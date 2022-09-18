import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect } from "react";
import { auth } from "../firebase";

import { useState } from "react";




export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({});
    console.log("ran");

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            console.log(user);
        })
    }, []);

    <AuthContext.Provider value = {currentUser}>
        {children}
    </AuthContext.Provider>
}