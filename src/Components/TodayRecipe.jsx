import React from 'react';
import SectionInfo from './SectionInfo';
import { FaArrowRight } from 'react-icons/fa';
const TodayRecipe = () => {
  const recipe = [
    {chefName:'By John Smith',itemName:'Chicken Resmin Kabab',recipeImage:'https://html.webinane.com/mazaa/assets/images/resources/today-recipe2.jpg',preparationTime:'30 Mins',cookingTime:'10 To 30 Mins',served:4},
    {chefName:'By Jane Doe',itemName:'Haak-Kashmiri Spinach',recipeImage:'https://html.webinane.com/mazaa/assets/images/resources/today-recipe1.jpg',preparationTime:'30 Mins',cookingTime:'10 To 30 Mins',served:4},
    {chefName:"By David Lee",itemName:'Gundruk and Sinki Soup',recipeImage:'https://html.webinane.com/mazaa/assets/images/resources/today-recipe3.jpg',preparationTime:'30 Mins',cookingTime:'10 To 30 Mins',served:4},
    {chefName:'By Emily Davis',itemName:'Sesame Honey Roasted',recipeImage:'https://html.webinane.com/mazaa/assets/images/resources/recipe6.png',preparationTime:'30 Mins',cookingTime:'10 To 30 Mins',served:4},
  ]
  return (
    <>
      <SectionInfo title="Delicious Taste of" heading="TODAY RECIPES" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {recipe.map((e,i)=><div key={i} className="p-4 border-0 transition duration-500 hover:border-2 hover:border-slate-500 hover:cursor-move overflow-hidden shadow-md rounded-md recipe">
          <img src={e.recipeImage} alt="recipe image" />
          <h3 className='text-xl my-2 font-bold text-slate-600'>{e.itemName}</h3>
          <p className='text-md mb-3 font-Roboto text-blue-500 font-medium '>{e.chefName}</p>
          <p className='text-title'><small>preparation time: <strong className='text-slate-700'>{e.preparationTime}</strong></small></p>
          <p className='text-title'><small>cooking time: <strong className='text-slate-700'>{e.cookingTime}</strong></small></p>
          <p className='text-title'><small>serves: <strong className='text-slate-700'>{e.served} persons</strong></small></p>
          <button className='flex justify-center items-center border-2 w-full p-2 rounded-full mt-2 hover:bg-slate-800 hover:text-white'>More Recipe <FaArrowRight className='pl-2 text-xl text-blue-500' /></button>
        </div>)}
      </div>
    </>
);
};

export default TodayRecipe;