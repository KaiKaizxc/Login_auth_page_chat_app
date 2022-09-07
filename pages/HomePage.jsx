import React from 'react'
import SideBar from './components/SideBar'
import Chat from './components/Chat'
import Chats from "./components/Chats"

const HomePage = () => {
  return (
    <div className = "home">
      <div className = "container">

        <SideBar />
        <Chat />
        <Chats />
      </div>
      
    </div>
  )
}

export default HomePage