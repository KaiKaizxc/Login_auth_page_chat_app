import React from 'react'
import SideBar from './components/SideBar'
import Chat from './components/Chat'
import Chats from "./components/Chats"
import Link from 'next/link'
import { AuthContextProvider } from './context/AuthContext'


const HomePage = () => {
  return (
    <AuthContextProvider>
      <div className = "home">
        <div className = "container">

          <SideBar />
          <Chat />
        </div>
        
      </div>
    </AuthContextProvider>
  )
}

export default HomePage