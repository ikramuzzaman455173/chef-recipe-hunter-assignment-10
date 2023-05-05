import React, { useEffect, useState } from 'react';
import SectionInfo from './SectionInfo';
import { BiLike } from 'react-icons/bi';
import { Link } from "react-router-dom";
// import { LazyLoad } from 'react-lazyload';
import LazyLoad from 'react-lazy-load';
const TopChefs = () => {
  const [chefs, setChefs] = useState([])
  useEffect(() => {
    fetch('https://chef-recipe-hunting-server-side-jakaria455173.vercel.app/chefs').then(response => response.json()).then(data => {
      setChefs(data.chefSection)
    }).catch(error => console.log(`404 page not found ${error}`))
  }, [])
  return (
    <div className='my-10 bg-[url("https://html.webinane.com/mazaa/assets/images/resources/parallax.jpg")] rounded-md bg-cover w-full py-5'>
      <SectionInfo title="Expert and Professiona" heading="TOP CHEF’S RECIPS" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mx-5 mx-4">
        {chefs.map((e, i) => <div key={i} className="bg-white border-0 rounded-md p-4 flex md:flex-row flex-col md:shadow shadow-sm">
          <LazyLoad height={200}>
          <img className='border-2 rounded-md md:w-full w-full md:mb-0 mb-2 object-contain pr-2 h-[200px]' src={e.chefPicture} alt="chef picture" />
          </LazyLoad>
          <div className='flex flex-col justify-center items-center md:text-left text-center pl-2'>
            <h3 className='text-xl my-2 font-bold text-slate-600'>{e.chefName}</h3>
            <p className='text-title'><small>Experience: <strong className='text-slate-700'>{e.yearsOfExperience} Years</strong></small></p>
            <p className='text-title pr-5'><small>Total Recipes: <strong className='text-slate-700'>{e.numberOfRecipes}</strong></small></p>
            <p className='pr-14 text-title'><small className='flex justify-center items-center gap-2'>Likes: <strong className='text-slate-700 flex justify-center items-center'><BiLike className='text-blue-500 text-2xl' /> {e.likes}</strong></small></p>
            <Link to={`/chefpage/${e.chefId}`} className='awesome-btn px-5 py-2 mt-auto rounded-full tracking-wider font-Roboto'>View Recipes</Link>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default TopChefs;
