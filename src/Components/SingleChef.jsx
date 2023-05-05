import React from 'react'
import { TbChefHat } from 'react-icons/tb'
import { BiLike } from 'react-icons/bi'
import {FaFlag, FaPhone } from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import SoclialMediaIcon from './SoclialMediaIcon'

const SingleChef = ({ chefData }) => {
  // console.log(chefData);
  const {chefPicture,chefName,yearsOfExperience,numberOfRecipes,shortBio}=chefData
  return (
    <>
      <div className='my-10 bg-[#b7c5e6] rounded-md bg-cover md:w-[95%] w-full'>
        <div className='flex md:flex-row flex-col items-center bg-[#E8EBF2] gap-4 m-10 border-2 p-4  shadow-lg rounded-md'>
          <div className='border-4 transition-all duration-500 cursor-move bg-white m-4 rounded-lg hover:border-blue-500 '>
          <img src={chefPicture} className='md:w-[500px] md:h-[500px] object-fill md:shadow-0 shadow-md sm:w-[400px] w-[350px] sm-h[400px] h-[350px]' alt="chef image" />
          </div>
          <div className='flex flex-col border-2 shadow w-full mx-2 p-2'>
            <h3 className='md:text-6xl sm:text-4xl text-3xl font-bold text-slate-600 mx-auto p-2 mt-2 '>{chefName}</h3>
            <div className='flex flex-col mt-4 ml-4'>
              <p className='md:text-xl sm:text-lg text-[13px] my-4 md:text-left text-justify font-normal font-Roboto text-slate-600'>{shortBio}</p>
              <p className='flex items-center md:text-xl text-[12px] text-slate-500 font-medium pb-5'><TbChefHat className='md:text-3xl text-xl text-blue-500' /><strong className='pl-2'>Experience:</strong> <span className='pl-4'>{yearsOfExperience} Years</span></p>
              <p className='flex items-center md:text-xl text-[12px] text-slate-500 font-medium pb-5'><BiLike className='md:text-3xl text-xl text-blue-500' /><strong className='pl-2'>Total Recipes:</strong> <span className='pl-4'>{numberOfRecipes}</span></p>
              <p className='flex items-center md:text-xl text-[12px] text-slate-500 font-medium pb-5'><FaFlag className='md:text-3xl text-xl text-blue-500' /><strong className='pl-2'>Nationality:</strong> <span className='pl-4'> New Zealand</span></p>
              <p className='flex items-center md:text-xl text-[12px] text-slate-500 font-medium pb-5'><FaPhone className='md:text-3xl text-xl text-blue-500' /><strong className='pl-2'>Phone:</strong> <span className='pl-4'>(973) 344 78410</span></p>
              <p className='flex items-center md:text-xl text-[12px] text-slate-500 font-medium pb-5'><FiMail className='md:text-3xl text-xl text-blue-500' /><strong className='pl-2'>Email:</strong> <span className='pl-4'>username@domain.com</span></p>
            <SoclialMediaIcon/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleChef