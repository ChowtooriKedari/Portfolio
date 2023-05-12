import React from "react";
import ExperienceCard from "./ExperienceCard";
import { workExperiences } from "../../data/data.js";

const Experience = () => {
  const WorkExperiences=workExperiences;
  return (
  <section id="experience" className="border-b-[1px] border-b-gray-600 bg-[black] pl-20">
<div name='experience' className='w-full bg-[black] text-gray-300'>
<div className='max-w-[1000px] mx-auto p-2 flex flex-col justify-center w-full h-full'>
        <div className='flex flex-col w-full justify-center items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Experience</p>
               </div>
      </div>
</div>
<div className="flex justify-center items-center text-center">
</div>
<div className="pb-20 font-titleFont flex gap-20">
  <div className="mt-2 h-fit border-l-[6px] border-opacity-30 flex flex-col gap-10">
  {WorkExperiences.map((item, index) => (
            <ExperienceCard
            key={index}
              title={item.title}
              subTitle={item.subTitle}
              result={item.location}
              description={item.description} />
      ))}
  </div>
</div>
</section>
  );
};

export default Experience;
