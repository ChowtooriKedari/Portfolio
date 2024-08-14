import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import DartmouthIcon from '../assets/Dartmouth.png';
import SASTRAIcon from '../assets/SASTRA.png';
import NarayanaIcon from '../assets/Narayana.png';
import ViswamIcon from '../assets/Viswam.png';

const educationData = [
  {
    id: 1,
    degree: "Masters in Computer Science - Digital Arts",
    institution: "Dartmouth College, Hanover, NH, USA",
    duration: "2023-2025",
    details: "",
    icon: DartmouthIcon
  },
  {
    id: 2,
    degree: "B.Tech in Computer Science and Engineering",
    institution: "SASTRA Deemed University, Tamil Nadu, India",
    duration: "2017-2021",
    details: "Deans Merit Scholarship recipient",
    icon: SASTRAIcon
  },
  {
    id: 3,
    degree: "Higher Secondary",
    institution: "Narayana Junior College, Andhra Pradesh, India",
    duration: "2015-2017",
    details: "Awarded the National Merit Scholarship by the Central Government of India for outstanding performance in Higher Secondary Board Examinations",
    icon: NarayanaIcon
  },
  {
    id: 4,
    degree: "Secondary",
    institution: "Viswam EM High School, Andhra Pradesh, India",
    duration: "2010-2015",
    details: "Received \"Prathibha Award\" from the State Government of Andhra Pradesh for performing good in Secondary School Examinations",
    icon: ViswamIcon
  }
];

const Education = () => {
  return (
    <div name='education' className="education-section bg-[url('./assets/Circuit.png')] bg-left-bottom bg-right-bottom bg-no-repeat bg-opacity-100 border-b-[1px] border-b-gray-600">
      <h2 className="section-title">Education</h2>
      <br />
      <div className="timeline">
        {educationData.map((item, index) => (
          <div key={item.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className={`timeline-line ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-bulb"></div>
            </div>
            <div className="timeline-content">
              <div className="flex flex-col items-center">
                <img className="h-12 w-12 object-contain timeline-icon mb-4" src={item.icon} alt={`${item.degree} icon`} />
                <div className="text-left w-full">
                  <h3 className="degree-typewriter text-l md:text-l text-gray-800 group-hover:text-gray-600">
                    <TypewriterText text={item.degree} />
                  </h3>
                  <h4 className="text-sm md:text-base text-gray-600 group-hover:text-gray-500">
                    {item.institution}
                  </h4>
                  <p className="mt-2 text-sm md:text-base text-gray-500 group-hover:text-gray-400">
                    {item.duration}
                  </p>
                  {item.details && (
                    <p className="mt-2 text-sm md:text-base text-gray-500 group-hover:text-gray-400">
                      {item.details}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes rotateY {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }

        .education-section {
          padding: 40px 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          border-bottom: 1px solid #4b5563; /* 1px bottom border with gray color */
          background-blend-mode: overlay;
        }

        .custom-bg {
          background-image: url('./assets/Circuit.png'), url('./assets/Circuit.png');
          background-position: top right, bottom left;
          background-repeat: no-repeat, no-repeat;
          background-size: contain, contain;
        }

        .section-title {
          font-size: 2.5em;
          font-weight: bold;
          border-bottom: 4px solid #ec4899; /* Set border color to pink-600 */
          color: #fff; /* Set text color to white */
        }
        .timeline {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 0;
        }
        .timeline::before {
          content: '';
          position: absolute;
          width: 6px;
          background-color: white;
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -3px;
        }
        .timeline-item {
          padding: 10px 40px;
          position: relative;
          background-color: inherit;
          width: 40%;
        }
        .timeline-item.left {
          right: -10%;        
        }
        .timeline-item.right {
          left: 50%;
        }
        .timeline-line {
          width: 10%;
          height: 6px;
          background-color: white;
          top: 35px;
          position: relative;
        }
        .timeline-line.left {
          right: 1px;
        }
        .timeline-line.right {
          left: 1px;
        }
        .timeline-bulb {
          width: 16px;
          height: 16px;
          background-color: white;
          border: 4px solid purple;
          border-radius: 50%;
          position: absolute;
          top: -5px;
          left:1em;
        }
        .timeline-content {
          padding: 20px 30px;
          background-color: rgba(255, 255, 255, 1); /* Semi-transparent white */
          position: relative;
          border-radius: 6px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .timeline-icon {
          font-size: 2em;
          color: #6a0dad; /* Icon color */
          margin-bottom: 10px;
          animation: rotateY 5s linear infinite; /* Rotate the icon horizontally */
        }
        .timeline-content h3 {
          margin: 0;
          color: #6a0dad;
        }
        .timeline-content h4 {
          margin: 5px 0;
          color: #555;
        }
        .timeline-content p {
          margin: 10px 0 0;
          color: #777;
        }
        @media (min-width: 767px) and (max-width: 2500px) {
          .timeline-line {
            position: absolute;
          }
        }
        @media (max-width: 768px) {
          .timeline-item {
            position: relative;
            width: 100%;
            left: 0 !important;
            padding-left: 70px;
            padding-right: 25px;
            text-align: left;
          }
          .timeline::before {
            left: 0;
          }
          .timeline-line.left {
            right: 3.8em;
          }
          .timeline-line.right {
            left: -3.8em;
          }
          .timeline-line {
            width: 23%;
            position: relative;
          }
          .timeline::before {
            content: '';
            position: absolute;
            width: 6px;
            background-color: white;
            top: 0;
            bottom: 0;
            left: 2%;
          }
        }
      `}</style>
    </div>
  );
};

const TypewriterText = ({ text }) => {
  const [typewriterText] = useTypewriter({
    words: [text],
    loop: 0, // Infinite loop
    typeSpeed: 75, // Slightly slower typing speed for smoother animation
    deleteSpeed: 25, // Slower delete speed to reduce flickering
    delaySpeed: 2000, // Increase delay before restarting the typing effect
  });

  return (
    <span>
      {typewriterText}
      <Cursor cursorBlinking={true} cursorStyle="|" cursorColor="#ff014f" />
    </span>
  );
};

export default Education;
