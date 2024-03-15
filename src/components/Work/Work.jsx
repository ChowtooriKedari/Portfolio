import React from "react";
import { projectsData } from "../../data/data.js";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";

const Work = () => {
  return (
 <section
        id="projects"
        className="w-full py-20 border-b-[1px] border-b-gray-600 px-4">
          <div  className='w-full text-gray-300'>
          <div className='max-w-[1000px] mx-auto p-2 flex flex-col justify-center w-full h-full'>
        <div className='flex flex-col w-full justify-center items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 p-4'>Projects</p>
               </div>
      </div>
          </div>
        <div className="flex justify-center items-center text-center">
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
            {projectsData.map((item, index) => (
          <div className="w-full bg-[gray] p-4 xl:px-12 h-auto xl:py-10 
          rounded-lg flex flex-col bg-gradient-to-r 
          from-bodyColor 
          to-[#202327] group 
          hover:bg-gradient-to-b 
          hover:from-gray-900 hover:gray-900 
          transition-colors hover:scale-105 duration-500 hover:transition hover:ease-in-out">
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
              <img
                    className="w-full h-full max-h-[200px] object-cover"
                    src={item.src}
                    alt={item.src}
                  />
        </div>
<div className="w-full mt-5 flex flex-col gap-6">
<div>
  <div className="flex items-center justify-between">
    <h3 className="text-xl capitalize text-designColor font-normal">
      {item.title}
    </h3>
    <div className="flex gap-2">
    {item.githubLink && (
                <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <BsGithub />
                  </span>
                </a>
              )}
              {item.websiteLink && (
                <a href={item.websiteLink} target="_blank" rel="noopener noreferrer">
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <FaGlobe />
                  </span>
                </a>
              )}
    </div>
  </div>
  <p className="text-sm tracking-wide mt-3 text-white hover:text-gray-100 duration-300 text-justify">
    {item.des}
  </p>
</div>
</div>
</div>

            ))}
          </div>
      </section>
  );
};

export default Work;
