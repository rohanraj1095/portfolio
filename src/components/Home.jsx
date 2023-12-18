import React from 'react'
import heroImage from '../assets/heroImage1.png'
import { MdArrowRightAlt } from "react-icons/md"
import TypeWriterSc from './TypeWriterSc'



const Home = () => {



  return (
    <div name="home" className='w-full h-full bg-gradient-to-b from-black via-black to-[#1e293b] md:h-screen'>

        <div className=' w-full mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 md:gap-20'>
            <div className='flex flex-col justify-center h-full mt-20 gap-2'>
                <h2 className='text-4xl font-bold text-[#94a3b8] font-heroFont sm:text-6xl'>
                    Hi, <br />
                    I'm <span className='text-sky-500'>Rohan</span>
                    <br />
                    And<span className='sm:text-5xl'><TypeWriterSc/></span>
                </h2>
                <p className='text-gray-500 py-4 max-w-md font-PoppinFont text-justify'>
                I intend to work in an organization which can extract maximum of my potential and use it for fulfilling organizational objectives effectively and helping me giving shape to my creativity and growing personally as well as professionally through a learning experience process.

                </p>
                <div>
                    <a href='https://github.com/rohanraj1095' target='_blank' rel='noreferrer'
                    className='text-white group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:shadow-gray-500 hover:shadow-md transition duration-800 ease-in-out hover:gap-2'>
                        GitHub 
                        <span className='group-hover: duration-300'>< MdArrowRightAlt size={25} className=' ml-1'/></span>
                    </a>
                </div>
            </div>

            <div>
                <img src={heroImage} alt="portfolio" className=' rounded-2xl mx-auto mt-20'/>
            </div>

        </div>
    </div>

  )
}

export default Home