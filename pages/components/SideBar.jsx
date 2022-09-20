import React from 'react'
import Navbar from "./Navbar"
import Search from "./Search"
import Chats from './Chats'
import { auth } from "../firebase"
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { AuthContext, AuthContextProvider } from '../context/AuthContext'

const SideBar = () => {

  return (

    <div className = "sidebar">
        <Navbar />
        <Search />
        <Chats />
    </div>

  )
}

export default SideBar