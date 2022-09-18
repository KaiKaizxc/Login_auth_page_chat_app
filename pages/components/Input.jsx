import React from 'react'
import Image from "next/image"

const Input = () => {
  return (
    <div className = "input">
      <input type = "text" placeholder = "Type something..."/>
      <div className = "send">
        <Image src = "/attach.png" height = {30} width = {30}/>
        <input type = "file" style = {{display: "none"}} id = "file"/>
        <label htmlFor = "file">
          <Image src = "/image.png" height = {30} width = {30}/>
        </label>
        <button>send</button>

      </div>
    </div>
  )
}

export default Input