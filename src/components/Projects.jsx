import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      projectName: "Portfolio Website",
      hoverEffect: "hover:shadow-sky-600",
      techStack: ["React", "Tailwind"],
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div
      name="project"
      className=" bg-gradient-to-b from-black via-black to-[#1e293b] w-full  text-white md:h-screen"
    >
      <div className="max-w-screen-lg md:p-4 mx-auto flex flex-col justify-center w-full h-full pt-10 md:pt-32">
        <div className="pb-8 p-4 md:p-0">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-500">
            Projects
          </p>
          <p className="pt-2 pb-4">Check out some my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-0">
          {portfolios.map(
            ({ id, src, hoverEffect, projectName, techStack }) => (
              <div
                key={id}
                className={`shadow-md shadow-gray-600 rounded-lg ${hoverEffect} `}
              >
                <img
                  src={src}
                  alt=""
                  className=" rounded-md duration-200 hover:scale-105"
                />

                <div className="flex justify-between px-4 pb-2">
                  <div className="flex flex-col justify-between">
                    <div className="flex justify-center items-center text-2xl text-gray-400 font-bold py-2">
                      {projectName}
                    </div>
                    <div>
                      {techStack && techStack.length > 0 && (
                        <div>
                          {techStack.map((tech, index) => (
                            <span
                              key={index}
                              className="rounded bg-sky-400/80 px-2 py-[2px] text-[12px] font-medium text-slate-800 dark:bg-sky-300 dark:text-black mr-[5px] md:text-[14px]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col p-2 md:text-lg border-l border-gray-700 pl-4">
                    <button className=" duration-200 hover:scale-105 mb-1 pb-1 flex text-2xl justify-center items-center">
                      <FaGithub/>
                    </button>
                    <button className="py-0.5 border-t border-gray-500 duration-200 hover:scale-105">
                      Live
                    </button>
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
