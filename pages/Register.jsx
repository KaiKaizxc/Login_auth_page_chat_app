import React from 'react'
import Image from 'next/image'
import { useState } from "react"
import { auth, getStorage, storage, db } from "./firebase";
import { createUserWithEmailAndPassword, updateProfile, getAuth } from "firebase/auth";

import { ref, uploadBytesResumable, getDownloadURL,  } from "firebase/storage";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import Link from 'next/link';
import { useRouter } from 'next/router'

const Register = () => {

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const [loginSuccess, SetLoginSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const displayName = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const file = event.target[3].files[0];


    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        // Handle unsuccessful uploads
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then( (downloadURL) => {
          console.log('File available at', downloadURL);
          setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL
  
          }).then(() => {
            console.log("setDoc success!");
          }).catch((error) => {
            console.log("secDoc error", error);
          });

          setDoc(doc(db, "userChats", res.user.uid),{});
          updateProfile(res.user, {
            displayName,
            photoURL: downloadURL
          }).then(() => {
            console.log("successful update!");
            SetLoginSuccess(true);
            router.push("/HomePage")
          }).catch((error) => {
            console.log("error occured", error);
          })
        });





      }
    );

    } catch (error) {
      setError(true);

    }




    


  }
  return (
    <div className = "formContainer">
        <div className = "formWrapper">
            <span className = "logo">Budget chat</span>
            <span className = "title">Register</span>
            <form onSubmit = {handleSubmit}>
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
                {error && <span>Error occured</span>}

            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}

export default Register