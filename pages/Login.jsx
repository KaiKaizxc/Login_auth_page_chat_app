import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Login = () => {
  return (
    <div className = "formContainer">
        <div className = "formWrapper">
            <span className = "logo">Budget chat</span>
            <span className = "title">Login</span>
            <form>

                <input type = "email" placeholder = "email" required />
                <input type = "password" placeholder = "password" required/>
                <button>Sign In</button>
            </form>
            <p>You don't have an account? 
              <Link href = "/Register">
              Register
              </Link>
            </p>
        </div>
    </div>
  )
}

export default Login;