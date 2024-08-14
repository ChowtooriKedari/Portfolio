import React from 'react';

const ExperienceCard = ({ image, title, subTitle, result, description }) => {
  return (
    <div className="w-full h-full group flex pl-0">
      <div className="w-10 h-[6px] newbgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-blue-400 duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-[gray] bg-opacity-30 hover:bg-opacity-30 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div className="flex items-center gap-4">
            <img
              src={image}
              alt="Experience"
              className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-full flex-shrink-0"
            />
            <div>
              <h3 className="text-l md:text-2xl text-gray-400 font-semibold group-hover:text-white duration-300">
                {title}
              </h3>
              <p className="text-m mt-2 text-gray-400 group-hover:text-white duration-300">
                {subTitle}
              </p>
            </div>
          </div>
          <div>
            <p className="w-fit px-4 py-2 text-green-400 bg-[gray] bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-m font-medium">
              {result}
            </p>
          </div>
        </div>
        <ul className="work-experience-desc list-disc pl-5 flex flex-col gap-y-1">
  {description.map((desc, index) => (
    <li
      key={index}
      className="text-sm p-0 m-0 md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300"
    >
      {desc}
    </li>
  ))}
</ul>

      </div>
    </div>
  );
};

export default ExperienceCard;
