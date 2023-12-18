import React from 'react'
import { FaArrowUp } from "react-icons/fa"
import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <div className='w-full h-10 bg-gradient-to-b from-[#1e293b] to-black border-t border-sky-500 backdrop-filter backdrop-blur-sm bg-opacity-5 font-heroFont'>
      <div className='flex justify-between px-4 md:px-8'>
        <div className=' text-white'>
          <p className=' pt-1 text-lg hidden md:flex'>Made with <span className=' text-red-600 pl-2'> &#10084;</span></p>
        </div>
        <div>
        <p className=' pt-1 text-lg text-white'>&#169; 2023 Rohan Raj </p>
        </div>
        <div className='pt-2 text-sky-500 border-l border-sky-400 pl-4 cursor-pointer text-lg'>
          <Link to='home' smooth duration={500} > 
          <FaArrowUp/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer