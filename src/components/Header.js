import React from 'react';
import { RiNetflixFill } from "react-icons/ri";

function Header() {
  return (
    <>
        <div className='px-8 py-2 bg-gradient-to-b from-black'>
            <RiNetflixFill style={{ color: 'red', fontSize: '40px' }} />        
        </div>
       
    </>
  )
}

export default Header