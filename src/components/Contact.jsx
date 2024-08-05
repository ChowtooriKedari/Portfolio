import React from 'react'

const Contact = () => {
  return (
    <section
    id="contact"
    className="w-full pb-5 pt-5 border-b-[1px] border-b-gray-600"
  >
     <div name='contact' className='w-full  flex justify-center items-center'>
        <div className='flex flex-col max-w-[600px] '>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
               </div>
    </div>
    <div className="flex justify-center items-center text-center py-4">
    </div>
    <div className="flex flex-col gap-4 justify-center items-center text-center rounded-lg p-10  duration-1000">
      <h3 className="text-3xl font-bold text-white">Kedari Chowtoori</h3>
      <p className="text-lg font-normal text-designColor">
        Full-Stack Developer and Unity Developer
      </p>
      <p className="text-base text-gray-400 tracking-wide">
        Hello, Thank you for taking time to visit my portfolio! Please contact me on the below details if 
        you&apos;re in search for a Full-Stack/Unity Developer.
      </p>
      <p className="text-base text-md text-gray-400 flex items-center gap-2">
        Phone:{" "}
        <span className="text-lightText">
        <a href="tel:+1 (603)349-0683">+1 (603) 349-0683</a>
        </span>
      </p>
      <p className="text-base text-md text-gray-400 flex items-center gap-2">
        Email:{" "}
        <span className="text-lightText">
        <a href="mailto:kedari.chowtoori.gr@dartmouth.edu">kedari.chowtoori.gr@dartmouth.edu</a>
        </span>
      </p>
    </div>
  </section>
   
  )
}

export default Contact

