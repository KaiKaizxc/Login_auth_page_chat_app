import React from 'react'
import Image from "next/image"

const Search = () => {
  return (
    <div className = "search">
        
        <div className = "searchForm">
            
            <input type = "text" placeholder = "find a user"/>

        </div>
        <div className = "userChat">
            <Image height = {20} 
            width = {20}
            src = "/add.png"
            />
            <div className = "userChatInfo">
                <span>Jane</span>
            </div>

        </div>
    </div>
  )
}

export default Search