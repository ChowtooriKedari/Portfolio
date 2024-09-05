import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import HTMLIcon from '../assets/html.png';
import CSSIcon from '../assets/css.png';
import JavaScriptIcon from '../assets/javascript.png';
import AngularIcon from '../assets/Angular.png';
import NodeIcon from '../assets/node.png';
import SqlIcon from '../assets/SQLServer.png';
import UnityIcon from '../assets/Unity.png';
import CSharpIcon from '../assets/CSharp.png';
import MayaIcon from '../assets/Maya.png';
import AzureIcon from '../assets/Azure.png';  
import SwaggerIcon from '../assets/Swagger.png'; 
import VisualStudioIcon from '../assets/VisualStudio.png'; 
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Generate random values for animations
const generateRandom = (min, max) => Math.random() * (max - min) + min;

const generateAnimation = () => keyframes`
  0% { transform: translate(${generateRandom(-10, 10)}%, ${generateRandom(-10, 10)}%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translate(${generateRandom(-100, 100)}vw, ${generateRandom(-100, 100)}vh); opacity: 0; }
`;

const SkillsSection = styled.section`
  padding: 50px 0;
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.5), rgba(51, 51, 51, 0.5));
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const BackgroundIcons = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 11;
`;

const TransparentOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 1.0); /* Semi-transparent background */
  z-index: 10; /* Ensure it covers icons but remains under content */
`;

const Icon = styled.img`
  position: absolute;
  width: 2em;
  height: 2em;
  opacity: 0;
  animation: ${(props) => generateAnimation()} ${generateRandom(20, 30)}s linear infinite;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 12; /* Ensures content is above the transparent overlay */
`;

const SectionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 2.5em;
  font-weight: bold;
  border-bottom: 4px solid #ec4899;
  color: #fff;
`;

const SkillsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const SkillCategory = styled.div`
  width: 100%;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.5);
  }
`;

const SkillCategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(25, 0,0, 0.8);
  color: white;
  padding: 15px 20px;
  cursor: pointer;
  border-radius: 12px 12px 0 0;
  justify-content: center;
`;

const SkillCategoryTitle = styled.h6`
  font-size: 0.8em;
  margin: 0;
  text-align: center;
  align-items: center;
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0; /* Removed padding to ensure no space is shown initially */
  margin: 0;
  max-height: ${(props) => (props.isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers the items horizontally */
`;

const SkillItem = styled.li`
  font-size: 1.1em;
  margin-bottom: 10px;
  padding: ${(props) => (props.isOpen ? '10px 0' : '0')}; /* Padding only when open */
  color: white;
  text-align: center; /* Centers the text within each item */
`;

const SkillCategoryIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 1.5em;

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;

const Skills = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [iconPositions, setIconPositions] = useState([]);

  useEffect(() => {
    // Generate random positions for icons on initial load
    const positions = [];
    const numIcons = 10;

    for (let i = 0; i < numIcons; i++) {
      positions.push({
        top: `${Math.random() * 80}%`,  // To avoid the icons getting out of the container
        left: `${Math.random() * 80}%`
      });
    }

    setIconPositions(positions);
  }, []);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index); // Toggle only one dropdown at a time
  };

  return (
    <SkillsSection id="skills" className="bg-[black] bg-opacity-100 border-b-[1px] border-b-gray-600">
      <BackgroundIcons>
        {iconPositions.map((position, index) => (
          <Icon
            key={index}
            src={[HTMLIcon, CSSIcon, JavaScriptIcon, AngularIcon, NodeIcon, SqlIcon, UnityIcon, CSharpIcon,MayaIcon,AzureIcon,SwaggerIcon,VisualStudioIcon][index % 8]}
            style={{ top: position.top, left: position.left }}
          />
        ))}
      </BackgroundIcons>
      <TransparentOverlay />
      <Container>
        <SectionTitleContainer>
          <SectionTitle>Skills</SectionTitle>
        </SectionTitleContainer>
        <SkillsContent>
          {skillData.map((category, index) => (
            <SkillCategory key={index}>
              <SkillCategoryHeader onClick={() => toggleCategory(index)}>
                <SkillCategoryIcon>
                  <img src={category.icon} alt={`${category.title} icon`} />
                  <SkillCategoryTitle>{category.title}</SkillCategoryTitle>
                </SkillCategoryIcon>
                {openCategory === index ? <FaChevronUp /> : <FaChevronDown />}
              </SkillCategoryHeader>
              <SkillList isOpen={openCategory === index}>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex} isOpen={openCategory === index}>{skill}</SkillItem>
                ))}
              </SkillList>
            </SkillCategory>
          ))}
        </SkillsContent>
      </Container>
    </SkillsSection>
  );
};

const skillData = [
  {
    title: 'Programming Languages',
    icon: CSharpIcon,
    skills: ['C', 'C++', 'C#','Python','Java', 'SQL', 'JavaScript', 'HTML', 'CSS', 'Ruby'],
  },
  {
    title: 'Databases',
    icon: SqlIcon,
    skills: ['SQL Server', 'MySQL'],
  },
  {
    title: 'Design Tools',
    icon: MayaIcon,
    skills: ['Maya', 'Figma'],
  },
  {
    title: 'Web Development Frameworks',
    icon: AngularIcon,
    skills: ['ASP.Net MVC', 'ASP.Net Core', 'Ruby on Rails', 'Angular', 'NodeJS'],
  },
  {
    title: 'Development Tools and IDEs',
    icon: VisualStudioIcon,
    skills: ['Visual Studio', 'VS Code'],
  },
  {
    title: 'Testing and API Documentation Tools',
    icon: SwaggerIcon,
    skills: ['NUnit', 'Swagger'],
  },
  {
    title: 'Game and VR Development ',
    icon: UnityIcon,
    skills: ['Unity 3D', 'Virtual Reality'],
  },
  {
    title: 'Cloud Services',
    icon: AzureIcon,
    skills: ['Microsoft Azure'],
  },
];

export default Skills;
