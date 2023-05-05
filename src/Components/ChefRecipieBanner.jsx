import React from 'react';

const ChefRecipieBanner = ({heading,title}) => {
  return (
    <>
        <div
        className="w-full absolute bg-center bg-[#E8EBF1]  bg-cover md:h-[350px] carousel-banner h-[20rem] m-auto py-16 px-4  top-0 group"
        style={{
          backgroundImage: `url('https://html.webinane.com/mazaa/assets/images/mazaa-pattern.png')`
        }}>
        <div className="w-full flex lg:px-20 py-20 flex-col relative z-10">
          <h3 className='text-center md:text-[50px] sm:text-40px text-[32px] tracking-wider font-bold text-slate-600'>{heading}</h3>
          <p className='text-center my-4 font-medium text-xl text-slate-600 font-Roboto'>Home - <span className='font-bold text-blue-500'>{title}</span></p>
        </div>
      </div>
    </>
  );
};

export default ChefRecipieBanner;