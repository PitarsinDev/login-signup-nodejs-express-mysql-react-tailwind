import { useState } from 'react'
import './App.css'

import { Link } from 'react-router-dom';

import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <>
      <h1 className='text-center p-10 text-3xl text-zinc-800'>
        Login <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>SignUp</span>
      </h1>
      <div className='flex justify-center items-center p-10'>
        <Link to="/login" className='bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl px-10 py-1 text-white mx-4 hover:shadow-xl transition'>
          Login
        </Link>
        <Link to="/signup" className='bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl px-10 py-1 text-white mx-4 hover:shadow-xl transition'>
          Signup
        </Link>
      </div>
    </>
  )
}

export default App
