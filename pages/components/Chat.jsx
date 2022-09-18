import React from 'react'
import Image from "next/image"
import Messages from "./Messages"
import Input from "./Input"

const Chat = () => {
  return (
    <div className = "chat">
      <div className = "chatInfo">
        <span>Jane</span>
        <div className = "chatIcons">
          <Image src = "/camera.png" width = {24} height = {24}/>
          <Image src = "/add-user.png" width = {24} height = {24}/>
          <Image src = "/more.png" width = {24} height = {24}/>

        </div>
        
      </div>
      <Messages />
      <Input />
      
    </div>
  )
}

export default Chat