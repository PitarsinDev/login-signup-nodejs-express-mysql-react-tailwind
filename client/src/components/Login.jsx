import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await axios.post('http://localhost:3001/login', { email, password });
      alert('Login successful');
    } catch (error) {
      console.error('Error in login:', error);
      alert('Error in login');
    }
  };

  return (
    <div>
      <h2 className='text-center p-10 text-3xl text-zinc-800'>Login</h2>
      <div className='flex justify-center'>
        <div>
            <div>
                <table className='text-rose-500'>Email </table>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className='border border-zinc-500 rounded-md pl-2'/>
            </div>
            <br />
            <br />
            <div>
                <table className='text-rose-500'>Password </table>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className='border border-zinc-500 rounded-md pl-2'/>
            </div>
        </div>
      </div>
      <div className='flex justify-center p-10'>
        <button onClick={handleLogin} className='border border-rose-500 px-10 py-1 text-rose-500 rounded-xl hover:bg-rose-500 hover:text-white transition'>Login</button>
      </div>
      <div className='flex justify-center'>
        <p className='text-zinc-500 pr-2'>
        Don't have an account yet?
        </p>
        <a href="/signup" className='text-rose-500'>
            SignUp
        </a>
      </div>
    </div>
  );
};

export default Login;