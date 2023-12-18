import React from "react";

const Education = () => {
  return (
    <div name="education" className="w-full h-full bg-gradient-to-b from-[#1e293b] to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto md:pt-10 flex flex-col justify-center w-full h-full">
        <div>
          <p className=" text-4xl font-bold inline border-b-4 border-yellow-500 m-1 ">Education</p>
          <p className=" pt-4 pb-12 text-sm md:text-lg">
            My education has been a journey of self-discovery and growth. My
            educational qualification are as follows.
          </p>
        </div>
        <div className=" font-heroFont">
          <ol class="relative border-s dark:border-sky-600">
            <li class="mb-10 ms-4">
              <div class="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border  dark:border-gray-900 dark:bg-sky-500"></div>
              <time class="mb-1 font-normal leading-none text-gray-400 dark:text-gray-300">
                2019 - 2023
              </time>
              <h3 class="text-xl md:text-3xl lg:text-4xl font-semibold text-sky-400 pb-4">
                University Of Engineering And Management
              </h3>
              <p class="text-gray-700 dark:text-gray-400  md:text-lg">
                <span className="font-bold text-gray-300">Grade:</span> 8.14
                CGPA
              </p>
              <p class="text-gray-700 dark:text-gray-400 md:text-lg pb-4">
                <span className="font-bold text-gray-300">Degree:</span> Bachelor of Technology(B.Tech) - Computer Science and
                Engineering
              </p>
              <p class="mb-4 text-base  dark:text-gray-400 text-justify">
                I have done B.Tech in Computer Science and Engineering from
                University of Engineering and Management Jaipur. I have taken
                courses in Data Structures, Algorithms, Object-Oriented
                Programming, Database Management Systems, Operating Systems, and
                Computer Networks, among others. I was also a member of the UEMJ
                Aeromodelling Club , where I am learning and working on exciting
                projects with a team of talented developers.
              </p>
            </li>
            <li class="mb-10 ms-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-sky-500"></div>
              <time class="mb-1 font-normal leading-none text-gray-400 dark:text-gray-300">
                2017 - 2019
              </time>
              <h3 class="text-xl md:text-3xl lg:text-4xl font-semibold text-sky-400 pb-4">
                S.P Jain College
              </h3>
              <p class="text-gray-700 dark:text-gray-400 md:text-lg">
                <span className="font-bold text-gray-300">Grade:</span> 81.2%
              </p>
              <p class="text-gray-700 dark:text-gray-400 md:text-lg pb-4">
                <span className="font-bold text-gray-300">Degree:</span>{" "}
                Intermediate(+2) with PCM
              </p>
              <p class="mb-4 text-base  dark:text-gray-400">
                I completed my class +2 high school education at S.P Jain
                College, Sasaram, where I studied PCM.
              </p>
            </li>
            <li class="ms-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-sky-500"></div>
              <time class="mb-1 font-normal leading-none text-gray-400 dark:text-gray-300">
                2017
              </time>
              <h3 class="text-xl md:text-3xl lg:text-4xl font-semibold text-sky-400 pb-4">
                Bal Vikas Vidyalaya
              </h3>
              <p class="text-gray-700 dark:text-gray-400 md:text-lg">
                <span className="font-bold text-gray-300">Grade:</span> 9.8 CGPA
              </p>
              <p class="text-gray-700 dark:text-gray-400 md:text-lg pb-4">
                <span className="font-bold text-gray-300">Degree:</span>{" "}
                Matriculation(Xth)
              </p>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                I completed my class 10th education at Bal Vikas Vidyalaya,
                Sasaram
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Education;
