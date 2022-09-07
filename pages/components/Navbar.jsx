import React from 'react'
import Image from "next/image"

const Navbar = () => {
  return (
    <div className = "navbar">
        <span className = "logo">budget chat</span>
        <div className = "user">
            
            <Image src = "/add.png"height = {24} width = {24} />
            <span>Kai</span>
            <button>logout</button>

        </div>
    </div>
  )
}

export default Navbar