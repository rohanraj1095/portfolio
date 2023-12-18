import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
import c from "../assets/c.png"
import cpp from "../assets/c++.png"
import linux from "../assets/linux.png"
import sql from "../assets/sql.png"


const Skills = () => {

    const techs = [
        {
            id:1,
            src: c,
            title: 'C',
            style: 'shadow-blue-500',
            style1: 'hover:shadow-sky-500'

        },
        {
            id: 2,
            src: cpp,
            title: 'C++',
            style: 'shadow-blue-500',
            style1: 'hover:shadow-sky-500',

        },
        {
            id: 3,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
            style1: 'hover:shadow-sky-500',
        },
        {
            id: 4,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
            style1: 'hover:shadow-sky-500',
        },
        {
            id: 5,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
            style1: 'hover:shadow-sky-500',
        },
        {
            id: 6,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-500',
            style1: 'hover:shadow-sky-500',
        },
        {
            id: 7,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-500',
            style1: 'hover:shadow-sky-500',
        },
        {
            id: 8,
            src: sql,
            title: 'SQL',
            style: 'shadow-white',
            style1: 'hover:shadow-sky-500',
        },
        {
            id: 9,
            src: linux,
            title: 'Linux',
            style: 'shadow-gray-400',
            style1: 'hover:shadow-sky-500',
        },
        {
            id: 10,
            src: github,
            title: 'GitHub/Git',
            style: 'shadow-gray-500',
            style1: 'hover:shadow-sky-500',
        },

    ]


  return (
    <div name="skills" className=' bg-gradient-to-b from-[#1e293b] to-black w-full h-full sm:h-full'>
        
        <div className='max-w-screen-lg mx-auto md:p-4 flex flex-col justify-center w-full h-full text-white pt-14 md:pt-36'>

            <div className='p-4 md:p-0'>
                <p className='text-4xl font-bold border-b-4 border-yellow-500 inline'>Skills</p>
                <p className='py-6 pt-8'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-6 sm:px-0'>

                {
                    techs.map(({id, src, title, style, style1}) => (

                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} ${style1}`}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>

                    ))
                }


               
            </div>

        </div>

    </div>
  )
}

export default Skills