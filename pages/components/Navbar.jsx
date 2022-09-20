import React from 'react'
import Image from "next/image"
import { signOut } from 'firebase/auth'
import { auth } from "../firebase"
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { AuthContext, AuthContextProvider } from '../context/AuthContext'

const Navbar = () => {
  const router = useRouter();
  const currentUser = useContext(AuthContext);
  console.log(currentUser, "user navbar");

  return (
      <div className = "navbar">
          <span className = "logo">budget chat</span>
          <div className = "user">

              <div className = "imageWrapper">
              <Image src = {currentUser.photoURL} height = {38} width = {38} />
              </div>
              <span>{currentUser.displayName}</span>
              <button onClick = {() => {
                signOut(auth);
                router.push("/../Login");
              }}>logout</button>

          </div>
      </div>

  )
}

export default Navbar