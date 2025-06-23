import React, { useEffect, useRef } from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import './Home.css'; // Assuming you have a Home.css file for custom styles

const Home = () => {
  const [text] = useTypewriter({
    words: ["Full-Stack Developer", "Unity Developer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const videoRef = useRef(null);
  const splashContainerRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const splashContainer = splashContainerRef.current;

    const getRandomColor = () => {
      const colors = [
        'rgba(255, 99, 132, 0.5)',   // Light red
        'rgba(54, 162, 235, 0.5)',   // Light blue
        'rgba(255, 206, 86, 0.5)',   // Light yellow
        'rgba(75, 192, 192, 0.5)',   // Light green
        'rgba(153, 102, 255, 0.5)',  // Light purple
        'rgba(255, 159, 64, 0.5)'    // Light orange
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const createSplash = () => {
      const duration = videoElement.duration;
      const currentTime = videoElement.currentTime;
      const progress = currentTime / duration;

      // Create a splash element
      const splash = document.createElement('div');
      splash.className = 'splash';
      splash.style.left = `${Math.random() * 100}%`;
      splash.style.animationDuration = `${Math.random() * 1 + 1.5}s`;
      splash.style.backgroundColor = getRandomColor();
      splash.style.opacity = `${Math.max(0.3, 1 - progress * 1.2)}`;
      splashContainer.appendChild(splash);

      // Remove splash after animation completes
      splash.addEventListener('animationend', () => {
        splash.remove();
      });
    };

    if (videoElement) {
      videoElement.addEventListener('timeupdate', createSplash);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('timeupdate', createSplash);
      }
    };
  }, []);

  return (
    <section className="relative h-screen w-full flex overflow-hidden" id="my-content" name="home">
      {/* Responsive Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/Kedari_New.mp4"
        autoPlay
        loop
        muted
      />

      {/* Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

      {/* Full-Screen Black Transparent Background */}
    <div
  ref={splashContainerRef}
  className="relative w-full h-full flex justify-center items-center px-8 z-20 bg-black bg-opacity-70"
>
  {/* Wrapper for image and content */}
  <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-20 py-16">
    
    {/* Image Section */}
    <div className="flex justify-center">
      <img
        src="/KC.jpg"
        alt="Avatar"
        className="w-[250px] h-[350px] md:w-[100px] md:h-[100px] lg:w-[250px] lg:h-[350px]"
      />
    </div>

    {/* Text Section */}
    <div className="text-white max-w-3xl text-center lg:text-left">
      <p className="text-yellow-600 text-lg md:text-xl lg:text-2xl mb-2">Hi, I am</p>
      <h1 className="blend-text text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-300">
        Kedari Chowtoori
      </h1>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-2">
        a <span>{text}</span>
        <Cursor
          cursorBlinking={true}
          cursorStyle="_"
          cursorColor="#ff014f"
        />
      </h2>
      <p className="text-white py-4 text-base md:text-lg text-justify">
        Hi, I'm Kedari Chowtoori, a full-stack developer with three years of experience building interactive, user-focused web applications.
        I’ve led and contributed to projects serving large-scale customer bases, always with a focus on performance, usability, and impact. Outside of traditional development, I’m passionate about crafting immersive Virtual Reality simulations and games.
        I love combining creativity with technology to build experiences that engage and inspire.
        Above all, I’m driven by a mission to create software that makes a positive difference, delivering thoughtful, practical solutions that improve lives and empower users.
      </p>
    </div>
  </div>
</div>

    </section>
  );
};

export default Home;
