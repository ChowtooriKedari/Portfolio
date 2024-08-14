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
        className="relative w-full h-full flex flex-col justify-center items-center px-8 z-20 bg-black bg-opacity-70"
      >
        {/* Content */}
        <div className="App-header mb-6 mt-20">
          <img
            src="/Kedari.png"
            alt="Avatar"
            className="max-w-[250px] max-h-[250px] rounded-full mx-auto"
          />
        </div>
        <div className="text-white max-w-[850px] text-center">
          <p className="text-yellow-600 text-lg md:text-xl lg:text-2xl mb-4">Hi, I am </p>
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
          <div className="text-white py-4 text-l md:text-l lg:text-l text-justify">
            <p>Hello! I'm Kedari Chowtoori, a full-stack developer with a year and a half of experience. 
              I specialize in building interactive websites that enhance user experience and have successfully worked on projects 
              serving large customer bases. Additionally, I love creating Virtual Reality simulations and games, seamlessly combining 
              creativity with technology. My passion lies in developing software that positively impacts society and delivers meaningful solutions to users.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
