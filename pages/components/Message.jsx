import React from 'react'
import Image from "next/image"

const Message = () => {
  return (
    <div className = "message owner">
      <div className = "messageInfo">
        <div className = "imageWrapper">
          <Image src = "/me.jpg" layout = "fill" objectFit = "contain"/>
        </div>
        <span>just now</span>
      </div>
      <div className = "messageContent">
        <p>Hello</p>
        <div className = "imageWrapper">
          <Image src = "/favicon.ico" layout = "fill" />
        </div>
      </div>
    </div>
  )
}

export default Message