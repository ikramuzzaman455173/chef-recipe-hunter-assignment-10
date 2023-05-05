import React from 'react';
import SectionInfo from './SectionInfo';
import { FaRegCommentDots } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';
import LazyLoad from 'react-lazy-load';

const RecipeProgram = () => {
  const RecipeProgram = [
    { blogDate: '20 July 2021', blogImage:'https://html.webinane.com/mazaa/assets/images/resources/news1.jpg',blogTitle:'Fast-food chain, go behind the scenes',blogDes:'Lorem ipsum dolor sit amet dieu ilisicing elit. Ea ratione opius dlil ilm or maion.',likes:22},
    { blogDate: '20 July 2021', blogImage:'https://html.webinane.com/mazaa/assets/images/resources/news2.jpg',blogTitle:'Fast-food chain, go behind the scenes',blogDes:'Lorem ipsum dolor sit amet dieu ilisicing elit. Ea ratione opius dlil ilm or maion.',likes:22},
    { blogDate: '20 July 2021', blogImage:'https://html.webinane.com/mazaa/assets/images/resources/news3.jpg',blogTitle:'Fast-food chain, go behind the scenes',blogDes:'Lorem ipsum dolor sit amet dieu ilisicing elit. Ea ratione opius dlil ilm or maion.',likes:22},
  ]
  return (
    <div className='my-5 mb-10'>
      <SectionInfo title="Best Articles & News" heading="RECIPES PROGRAMS" />
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mb-[14rem]">
        {RecipeProgram.map((e,i)=><div key={i} className="relative md:mb-0 mb-[16rem]">
        <LazyLoad height={300}>
        <img src={e.blogImage} className='mx-auto border-0 rounded-md' alt="recipe image" />
          </LazyLoad>
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 cursor-pointer transition duration-500"></div>
          <div className='absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] p-4 text-center text-white hover:text-blue-500 transition duration-500'>
            <button className='px-6 py-2 rounded-full bg-white text-slate-600 font-semibold hover:bg-blue-500 hover:text-white transition duration-500'>Learn More</button>
          </div>
          <div className='absolute top-[16rem] pb-5 bg-white w-3/4 left-12 p-2 border-2'>
            <p className='text-md font-Roboto text-blue-500 font-medium pt-3'>{e.blogDate}</p>
            <h3 className='text-xl my-2 font-bold text-slate-600 hover:text-blue-500'>{e.blogTitle}</h3>
            <p className='font-Roboto text-slate-700 w-[90%]'>{e.blogDes}</p>
            <div className='w-[274px] relative top-16 flex justify-between right-3 border-2 rounded bg-blue-900 p-2'>
              <p className='flex items-center text-md text-white'><FaRegCommentDots className='pr-2 text-2xl'/> <small>No Comments</small></p>
              <p className='flex items-center text-md text-white'><BiLike className='pr-2 text-2xl'/> <small>{e.likes} Likes</small></p>
            </div>
          </div>
        </div>)}

      </div>
    </div>
  );
};

export default RecipeProgram;