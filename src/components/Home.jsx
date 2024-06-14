import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Full-Stack Developer", "Unity Developer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section name='home' className='h-full flex flex-col-2 border-b-[1px] border-b-gray-600 z-10 relative' id="my-content">
      {/* Container */}
      <div className='flex mt-8 mx-auto relative'>
        <div className="App-header mt-16 relative">
          <div className="image-container">
            <img
              src="/Kedari.png"
              alt="Avatar"
              className="background-image"
            />
            <div className="overlay"></div>
          </div>
        </div>
      </div>
      <div className='max-w-[1000px] pr-8 px-4 justify-left h-full' id="AboutContent">
        <p className='text-yellow-600 pt-40 pl-4' id="AboutContentP1">Hi, I am </p>
        <h1 className='text-4xl font-bold text-[grey] pl-4'>
          Kedari Chowtoori
        </h1>
        <h2 className="text-4xl font-bold text-white h-[80px] md:h-auto pl-4" >
          a <span>{text}</span>
          <Cursor
            cursorBlinking={true}
            cursorStyle="_"
            cursorColor="#ff014f"
          />
        </h2>
        <div className='text-[white] py-4 max-w-[900px] pl-4 text-justify' id="AboutContentCursor">
          <p>I’m a full-stack developer with a year and a half of experience in web development.
            I like to build interactive websites that provide a better user experience.
            I have experience working on projects that have a huge customer base.
            I also love to build Virtual Reality Simulations and games.
            I am passionate about building software that in one way or the other is helpful to people in society.</p>
        </div>
      </div>
      <div>
      </div>
    </section>
  );
};

export default Home;
