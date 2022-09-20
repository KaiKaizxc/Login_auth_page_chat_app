import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect } from "react";
import { auth } from "../firebase";

import { useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";




export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({});
    console.log("ran provider");

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            console.log(user, "AuthContext ran");
        });

        unsub();
    }, []);

    return (
        <AuthContext.Provider value = {currentUser}>
            {children}
        </AuthContext.Provider>

    )


}