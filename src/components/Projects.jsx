import React from "react";
import faceRecognition from '../assets/portfolio/faceRecognition1.jpg'
import game from '../assets/portfolio/game.png'
import portfolioImg from '../assets/portfolio/portfolio1.png'
import weatherAppImg from '../assets/portfolio/weather1.jpg'
import randomJokeImg from '../assets/portfolio/randomJoke1.jpg'
import { FaGithub } from "react-icons/fa";
import { VscLiveShare } from "react-icons/vsc";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: portfolioImg,
      projectName: "Personal Portfolio",
      hoverEffect: "hover:shadow-sky-600",
      techStack: ["React", "Tailwind"],
      live: <VscLiveShare />,
      liveLink: "https://rohanraj1095.github.io/portfolio/",
      href: "https://github.com/rohanraj1095/portfolio/",
    },
    {
      id: 2,
      src: weatherAppImg,
      projectName: "WeatherApp",
      hoverEffect: "hover:shadow-sky-600",
      techStack: ["HTML", "CSS", "JavaScript", "API"],
      href: "https://github.com/rohanraj1095/WeatherApp-JS",
      widthStyle: ""
    },
    {
      id: 3,
      src: faceRecognition,
      projectName: "Attendance System",
      hoverEffect: "hover:shadow-sky-600",
      techStack: ["python", "openCV", "tkinter"],
      href: "https://github.com/rohanraj1095/AttendanceSystem_project",
    },
    {
      id: 4,
      src: randomJokeImg,
      projectName: "Random Joke Generator",
      hoverEffect: "hover:shadow-sky-600",
      techStack: ["HTML", "CSS", "JavaScript", "API"],
      href: "https://github.com/rohanraj1095/RandomJoke",
    },
    {
      id: 5,
      src: game,
      projectName: "Guess Number",
      hoverEffect: "hover:shadow-sky-600",
      techStack: ["HTML", "CSS", "JavaScript"],
      href: "https://github.com/rohanraj1095/numberGame",

    }
  ];

  return (
    <div
      name="project"
      className=" bg-gradient-to-b from-black via-black to-[#1e293b] w-full h-full text-white "
    >
      <div className="max-w-screen-lg md:p-4 mx-auto flex flex-col justify-center w-full h-full pt-10 md:pt-32">
        <div className="pb-8 p-4 md:p-0">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-500">
            Projects
          </p>
          <p className="pt-2 pb-4">Check out some my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-0 pt-10">
          {portfolios.map(
            ({ id, src, hoverEffect, projectName, techStack, live, href, liveLink }) => (
              <div
                key={id}
                className={`shadow-md shadow-gray-600 rounded-lg ${hoverEffect} bg-black`}
              >
                <img
                  src={src}
                  alt=""
                  className=" rounded-md duration-200 hover:scale-105 relative h-56 overflow-hidden bg-cover w-96"
                />

                <div className="flex justify-between px-4 pb-2 h-24">
                  <div className="flex flex-col justify-between">
                    <div className="flex justify-center items-center text-xl text-gray-400 font-bold pt-6">
                      {projectName}
                    </div>
                    <div>
                      {techStack && techStack.length > 0 && (
                        <div>
                          {techStack.map((tech, index) => (
                            <span
                              key={index}
                              className="rounded bg-sky-400/80 px-2 py-[2px] text-[10px] font-medium text-slate-800 dark:bg-sky-300 dark:text-black mr-[5px] md:text-[12px]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col p-2 ">
                    <a href={href} target="_blank" rel="noreferrer">
                    <button className=" duration-200 hover:scale-105 mb-1 pb-1 flex text-3xl justify-center items-center pt-2">
                      <FaGithub/>
                    </button>
                    </a>
                    <a href={liveLink} target="_blank" rel="noreferrer">
                    <button className="pt-2  duration-200 hover:scale-105 md:text-2xl text-2xl">
                          {live}
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
