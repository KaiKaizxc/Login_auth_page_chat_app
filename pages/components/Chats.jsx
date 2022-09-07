import React from 'react'
import Image from "next/image"

const Chats = () => {
  return (
    <div className = "chats">
        <div className = "userChat">
            <Image height = {20} 
            width = {20}
            src = "/add.png"
            />
            <div className = "userChatInfo">
                <span>Jane</span>
                <p>Hello</p>
            </div>
        </div>
        <div className = "userChat">
            <Image height = {20} 
            width = {20}
            src = "/add.png"
            />
            <div className = "userChatInfo">
                <span>Jane</span>
                <p>Hello</p>
            </div>
        </div>
        <div className = "userChat">
            <Image height = {20} 
            width = {20}
            src = "/add.png"
            />
            <div className = "userChatInfo">
                <span>Jane</span>
                <p>Hello</p>
            </div>
        </div>
        <div className = "userChat">
            <Image height = {20} 
            width = {20}
            src = "/add.png"
            />
            <div className = "userChatInfo">
                <span>Jane</span>
                <p>Hello</p>
            </div>
        </div>
    </div>
  )
}

export default Chats