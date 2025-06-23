import React from 'react';
import { FaLinkedin, FaGithub, FaHackerrank, FaPhone } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
  const copyToClipboard = () => {
    const phoneNumber = '+1 (603) 349-0683';
    navigator.clipboard.writeText(phoneNumber).then(() => {
    }, () => {
      alert('Failed to copy the phone number.');
    });
  };

  return (
    <section id="contact" className="w-full pt-5">
      <div name='contact' className='w-full flex justify-center items-center'>
        <div className='flex flex-col max-w-[600px]'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
        </div>
      </div>
      <div className="flex justify-center items-center text-center py-2">
      </div>
      <div className="flex flex-col gap-4 justify-center items-center text-center rounded-lg p-5 duration-1000">
        <h3 className="text-3xl font-bold text-white">Kedari Chowtoori</h3>
        <p className="text-lg font-normal text-designColor">
          Full-Stack Developer and Unity Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Thank you for taking time to visit my portfolio! Please contact me on the below details if 
        you&apos;re in search for a Full-Stack/Unity Developer.        </p>
        <div className="flex gap-4 mt-4">
          <button onClick={copyToClipboard} aria-label="Copy Phone Number">
            <FaPhone className="text-lightText text-2xl hover:text-pink-600 transition duration-300" />
          </button>
          <a href="mailto:kedarichowtoori@gmail.com" aria-label="Email">
            <SiGmail className="text-lightText text-2xl hover:text-pink-600 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/kedari99" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-lightText text-2xl hover:text-pink-600 transition duration-300" />
          </a>
          <a href="https://github.com/ChowtooriKedari" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="text-lightText text-2xl hover:text-pink-600 transition duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
