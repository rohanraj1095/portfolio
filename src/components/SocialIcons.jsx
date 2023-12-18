import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialIcons = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn
                <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/rohan-raj-4989041b1/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                GitHub
                <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/rohanraj1095',
        },
        {
            id: 3,
            child: (
                <>
                Mail
                <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:rohanraj12149@gmail.com',
            
        },
        {
            id: 4,
            child: (
                <>
                Resume
                <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: 'https://drive.google.com/file/d/1gwmU5HM9wv1vXDd06Nem61jItOrmCrb9/view?usp=drive_link',
            style: 'rounded-br-md',
            download: true,
        }

    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

        {
            links.map(({id, child, href, style, download}) => (
                <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-200 bg-transparent backdrop-filter backdrop-blur-sm bg-opacity-5 ${style} `}>
                <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel="noreferrer">
                {child}
                </a>
                </li>
            ))
        }

            
        </ul>
    </div>
  )
}

export default SocialIcons