import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { LiaSchoolSolid } from "react-icons/lia";
import { MdOutlineScience } from "react-icons/md";
import { Link } from "react-scroll";
import { GiSkills } from "react-icons/gi";
import { RiContactsFill } from "react-icons/ri";

import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      icons: <IoHome />,
    },
    {
      id: 2,
      link: "education",
      icons: <LiaSchoolSolid />,
    },
    {
      id: 3,
      link: "project",
      icons: <MdOutlineScience />,
    },
    {
      id: 4,
      link: "skills",
      icons: <GiSkills />,
    },
    {
      id: 5,
      link: "contact",
      icons: <RiContactsFill />,
    },
  ];

  const socialLinks = [
    {
      id: 1,
      SocialIcon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/rohan-raj-4989041b1/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      SocialIcon: <FaGithub />,
      href: "https://github.com/rohanraj1095",
    },
    {
      id: 3,
      SocialIcon: <HiOutlineMail />,
      href: "@",
    },
    {
      id: 4,
      SocialIcon: <BsFillPersonLinesFill />,
      href: "https://drive.google.com/file/d/1gwmU5HM9wv1vXDd06Nem61jItOrmCrb9/view?usp=drive_link",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className=" flex justify-between items-center w-full h-14 text-whit bg-slate-900 px-4 fixed backdrop-filter backdrop-blur-sm bg-opacity-5 border-b border-sky-500 z-10">
      <div>
        <h1 className=" font-signature text-3xl ml-2 text-sky-500 cursor-pointer hover:text-4xl">
          R<span className=" text-white">ohan</span>R
          <span className=" text-white">aj</span>
        </h1>
      </div>
      <div>
        <ul className=" hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200 hover:text-sky-600"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className=" cursor-pointer pr-4 z-10 text-gray-500 md:hidden "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col p-6 absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 ">
          <div className=" ">
            <div className="border-b border-gray-700 pb-2">
              {links.map(({ id, link, icons }) => (
                <li
                  key={id}
                  className="px-4 py-4 cursor-pointer capitalize text-3xl"
                >
                  <div className="flex flex-row">
                    <div className=" pr-4">{icons}</div>
                    <Link
                      onClick={() => setNav(!nav)}
                      to={link}
                      smooth
                      duration={500}
                    >
                      {link}
                    </Link>
                  </div>
                </li>
              ))}
            </div>
            <div className=" flex flex-row pt-2 border-b border-gray-700 pb-2">
              {socialLinks.map(({ id, href, SocialIcon }) => (
                <li
                  key={id}
                  className="px-4 py-4 cursor-pointer capitalize text-3xl"
                >
                  <div className=" pr-4">
                    <a href={href} target="_blank" rel="noreferrer">
                      {SocialIcon}
                    </a>
                  </div>
                </li>
              ))}
            </div>
          </div>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
