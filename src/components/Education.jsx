 
import React from 'react';

const educationData = [
  {
    id: 1,
    degree: "Master of Science in Computer Science - Digital Arts",
    institution: "Dartmouth College, Hanover, NH, USA",
    duration: "2023-2025",
    details: ""
  },
  {
    id: 2,
    degree: "B.Tech in Computer Science and Engineering",
    institution: "SASTRA Deemed University, India",
    duration: "2017-2021",
    details: "Deans Merit Scholarship recipient"
  },
  {
    id: 3,
    degree: "Higher Secondary",
    institution: "Narayana Junior College, Nellore, Andhra Pradesh, India",
    duration: "2015-2017",
    details: "Awarded the National Merit Scholarship by the Central Government of India for outstanding performance in Higher Secondary Board Examinations"
  },
  {
    id: 4,
    degree: "Secondary",
    institution: "Viswam EM High School, Madanapalle, Andhra Pradesh, India",
    duration: "2010-2015",
    details: "Received \"Prathibha Award\" from the State Government of Andhra Pradesh for performing good in Secondary School Examinations"
    }
];

const Education = () => {
  return (
    <div name='education' className="education-section">
      <h2 className="section-title">Education</h2>
      <br></br>
      <div className="timeline">
        {educationData.map((item, index) => (
          <div key={item.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
             <div className={`timeline-line ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-bulb"></div>
            </div>
            <div className="timeline-content">
              <h3>{item.degree}</h3>
              <h4>{item.institution}</h4>
              <p>{item.duration}</p>
              <p>{item.details}</p>
            </div>

          </div>
        ))}
      </div>
      <style jsx>{`
        .education-section {
          padding: 40px 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          border-bottom: 1px solid #4b5563; /* 1px bottom border with gray color */
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
          background-color: white;
          position: relative;
          border-radius: 6px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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

export default Education;
