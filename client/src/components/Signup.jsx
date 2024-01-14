import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await axios.post('http://localhost:3001/signup', { username, email, password });
      alert('Signup successful');
    } catch (error) {
      console.error('Error in signup:', error);
      alert('Error in signup');
    }
  };

  return (
    <div>
      <h2 className='text-center p-10 text-3xl text-zinc-800'>Signup</h2>
      <div className='flex justify-center'>
        <div>
            <div>
                <table className='text-rose-500'>Username</table>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} className='border border-zinc-500 rounded-md pl-2'/>
            </div>
            <br />
            <br />
            <div>
                <table className='text-rose-500'>Eamil</table>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className='border border-zinc-500 rounded-md pl-2'/>
            </div>
            <br />
            <br />
            <div>
                <table className='text-rose-500'>Password</table>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className='border border-zinc-500 rounded-md pl-2'/>
            </div>
        </div>
      </div>
      <div className='flex justify-center py-5'>
        <button onClick={handleSignup} className='border border-rose-500 px-10 py-1 text-rose-500 rounded-xl hover:bg-rose-500 hover:text-white transition'>Signup</button>
      </div>
      <div className='flex justify-center'>
        <p className='text-zinc-500 pr-2'>
            Already have an account?
        </p>
        <a href="/login" className='text-rose-500'>
            login
        </a>
      </div>
    </div>
  );
};

export default Signup;