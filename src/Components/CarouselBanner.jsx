import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

function CarouselBanner() {
  const slides = [
    {
      image: 'https://html.webinane.com/mazaa/assets/images/slide-image-1.jpg',
      title: '100% Natural',
      heading: 'Choclate Chip Cream',
      description:'Many Of the chips we tested were bland and chalky with a grainy crunch from too much sugar'
    },
    {
      image: 'https://html.webinane.com/mazaa/assets/images/slide-image2.jpg',
      title: 'Do It Yourself Plan',
      heading: 'The Fasting Mimicking',
      description:'Organic Minestrone five pitted green olives button text start diet today'
    },
    {
      image: 'https://html.webinane.com/mazaa/assets/images/slide-image3.jpg',
      caption: 'Caption for Image One',
      title: 'The Perfect Choice',
      heading: 'Chicken and Mushroom',
      description:'Fresh, organic ingredients. Carefully prepared. '
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className="w-full absolute bg-center bg-cover md:h-[26rem] carousel-banner h-[25rem] m-auto py-16 px-4  top-0 group"
      style={{
        backgroundImage: `url(${slides[currentIndex].image})`}}>
      <div className="absolute inset-0 md:bg-transparent bg-black opacity-20"></div>
      <div className="w-full flex lg:px-20 py-20 flex-col relative z-10">
        <p className='mb-2 md:text-xl text-lg text-slate-700 font-medium'>{slides[currentIndex].title}</p>
        <h3 className='md:text-5xl text-3xl my-2 font-bold md:w-[400px] text-gray-700 md:text-gray-600'>{slides[currentIndex].heading}</h3>
        <p className='my-2 text-md md:w-[450px] w-[320px] text-gray-700 md:font-normal font-medium md:text-slate-700 '>{slides[currentIndex].description}</p>
        {/* <button className='bg-green-500 p-2 rounded-full inline-block w-[150px] transition duration-300 hover:bg-green-400 my-2 font-bold text-white'>Book A Table</button> */}
        <button className='awesome-btn w-[150px] rounded-full px-5 p-2'>Book A Table</button>
      </div>
      {/* Left Arrow */}
      <div className="hidden z-10 group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden z-10 group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
}

export default CarouselBanner;