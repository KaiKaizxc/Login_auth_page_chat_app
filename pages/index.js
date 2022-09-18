import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Register from './Register'
import Login from "./Login"
import HomePage from "./HomePage";
import Link from 'next/link'
import { AuthContext } from "./context/AuthContext"; 
import { useContext } from "react";
import { AuthContextProvider } from './context/AuthContext'


export default function Home() {
  const currentUser = useContext(AuthContext);
  console.log(currentUser);
  return (
    <AuthContextProvider>
      <div>
        <Register/>



      </div>
    </AuthContextProvider>
  )
}
