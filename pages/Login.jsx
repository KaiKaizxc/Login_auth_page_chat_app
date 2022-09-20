import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth" 
import { auth } from "./firebase"
import { useRouter } from 'next/router'

const Login = () => {

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const [loginSuccess, SetLoginSuccess] = useState(false);
  const router = useRouter();
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target[0].value;
    const password = event.target[1].value;



    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user, "login success!");
          router.push("/HomePage");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        })


    } catch (error) {
      setError(true);

    }

  }

  return (
    <div className = "formContainer">
        <div className = "formWrapper">
            <span className = "logo">Budget chat</span>
            <span className = "title">Login</span>
            <form onSubmit = {handleSubmit}>

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