import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {Stage, PresentationControls} from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import {useGLTF} from "@react-three/drei";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Front-end Developer", "Unity Developer","Problem Solver"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  function Model(props){
      const {scene} = useGLTF("/Avatar.glb");
      return <primitive object={scene} {...props} /> 
    }
  return (
    <section name='home' className='h-full flex flex-col-2 border-b-[1px] border-b-gray-600 z-10' id="my-content">
      {/* Container */}
         <div className='flex mt-8 mx-auto'>
    <div className="App-header -mt-8">
      <Canvas           
        style={{
          "position": "relative",
          "height": "500px",
          "max-width":"500px",
          "width" :"350px",
          "display":"flex"
        }}
      >

        <PresentationControls
          global zoom={0.01}
          polar={[-0.1, Math.PI / 4]}
        >
          <Stage environment={null}>
            <Model/>
          </Stage>
        </PresentationControls>
      </Canvas>
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
        <div className='text-[white] py-4 max-w-[900px] pl-4 text-justify'  id="AboutContentCursor">
        <p>I’m a front-end developer with a year and a half of experience in web development.
          I like to build interactive websites that provide a better user experience.
                 I have experience working on projects that has a huge customer base.
               I also love to build Virtual Reality Simulations and games.
               I am passionate about building software that in one way or the other is helpful to people in the society.</p>  
        </div>
        <div>
        </div>
      </div>
      <div> 

 
   
  </div>
</section>
  );
};

export default Home;