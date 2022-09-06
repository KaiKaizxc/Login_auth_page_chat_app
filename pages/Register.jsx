import React from 'react'
import Image from 'next/image'

const Register = () => {
  return (
    <div className = "formContainer">
        <div className = "formWrapper">
            <span className = "logo">Budget chat</span>
            <span className = "title">Register</span>
            <form>
                <input type = "text" placeholder = "display name" required/>
                <input type = "email" placeholder = "email" required />
                <input type = "password" placeholder = "password" required/>
                <input style = {{display: "none"}}type = "file" id = "file"/>
                <label htmlFor = "file">
                    <Image 
                    src = "/add.png"
                    height = {40}
                    width = {40}
                    />
                    <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}

export default Register