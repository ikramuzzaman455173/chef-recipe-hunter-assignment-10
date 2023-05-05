import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const SpecialOffer = () => {
  return (
    <>
      <div className="container px-6 py-6 flex justify-center items-center flex-col mt-0 md:my-16 special-offer">
        <h1 className="text-lg font-bold text-center lg:text-4xl text-slate-700 inline-block p-4 w-full md:w-1/2">
          Special Ofers For New Subscribers
        </h1>
        <p className='inline-block p-4 md:text-lg text-md text-gray-700 md:w-1/2 w-full text-center'>Subscribe to our newsletters now and stay up to date with new collections.</p>
        <div className='flex w-full justify-center items-center mt-4 relative'>
          <input type="text" className='border-blue-500 transition-all duration-300 border-2 focus:outline-none md:w-[50%] sm:w[75%] w-[100%] p-4 rounded-full bg-transparent text-slate-800 font-medium text-lg' placeholder='Enter Your Email Address' />
          <a  className="absolute md:flex sm:flex hidden items-center justify-center button  md:right-[20rem] p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-slate-600 cursor-pointer rounded-full shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-slate-600 group-hover:translate-x-0 ease">
            <FaArrowRight/>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-slate-600 transition-all duration-300 transform group-hover:translate-x-full ease"><FaArrowRight/> </span>
            <span className="relative invisible"><FaArrowRight/></span>
          </a>
        </div>
      </div>
    </>
  );
};

export default SpecialOffer;