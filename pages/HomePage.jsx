import React from 'react'
import SideBar from './components/SideBar'
import Chat from './components/Chat'
import Chats from "./components/Chats"
import Link from 'next/link'


const HomePage = () => {
  return (
    <div className = "home">
      <div className = "container">

        <SideBar />
        <Chat />
      </div>
      
    </div>
  )
}

export default HomePage