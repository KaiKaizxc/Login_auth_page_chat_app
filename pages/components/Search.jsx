import React from 'react'
import Image from "next/image"
import { useState } from "react"
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase"


let timerID;

const Search = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);



  const queryDB = () => {
    console.log( userName, "username");
    const q = query(collection(db, "users"),where("displayName", "==", userName));
   
    getDocs(q)
    .then((response) => {
      console.log(response, "response");
      response.forEach((object, index) => {
        console.log(object.data(), "object");
        setUser(object.data());
        setError(false);
        
      })

      if (response.empty) {
        setUser(null);
        setError(true);
      }
    })
    .catch(error => {
      console.log(error, "error occured");
      setError(true);
      setUser(null);
    })
  }
  const handleKey = (event ) => {
    event.code === "Enter" && queryDB();
  }


  return (
    <div className = "search">
        
        <div className = "searchForm">
            
            <input type = "text" 
            onInput = {(event) => {
               // could try debounce here LMAO 
               // idk why react wont work w debounce but ok 
              setUserName(event.target.value);
            }}
            onKeyDown = {handleKey}

            placeholder = "find a user"
            
            />

        </div>
        {error && <span>User Not Found</span>}
        {
          user && 
          <div className = "userChat">
          <Image height = {20} 
          width = {20}
          src = {user.photoURL}
          />
          <div className = "userChatInfo">
              <span>{user.displayName}</span>
          </div>

      </div>
        }

    </div>
  )
}

export default Search