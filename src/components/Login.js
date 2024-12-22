import React, { useState } from 'react';
import Header from './Header';

function Login() {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn);
    }

  return (
    <div>
        <Header />
        <div className='flex justify-center items-center h-screen'>
            <form className='w-4/12 p-12 bg-black'>
                <h1 className='font-bold text-white text-xl py-4'>{isSignIn ? "Sighn In" : "Sighn Up"}</h1>
                {
                    !isSignIn && <input type='text' placeholder='Full Name' className='p-2 my-2 w-full' />
                }
                <input type='text' placeholder='Email Address' className='p-2 my-2 w-full' />
                <input type='password' placeholder='Password' className='p-2 my-2 w-full' />
                <button className='p-2 my-2 bg-red-700 text-white w-full'>{isSignIn ? "Sighn In" : "Sighn Up"}</button>
                <p className='py-4 text-white cursor-pointer' onClick={()=>toggleSignInForm()}>{isSignIn ? "New to Netflix? Sign up Now" : "Already a user? Sighn In now"}</p>
            </form>
       </div> 
    </div>
  )
}

export default Login