import React, { useContext } from 'react'
import ChefRecipieBanner from './ChefRecipieBanner'
import SingleChef from './SingleChef'
import ChefRecipe from './ChefRecipe'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider'
import LoadingSpinner from './LoadingSpinner'
const ChefRecipes = () => {
  const {loading}=useContext(AuthContext)
  const data = useLoaderData()
  if (loading) {
    return <LoadingSpinner/>
  }
  // console.log(data);
  return (
    <>
      <ChefRecipieBanner heading="CHEF DETAIL" title="Chef Detail" />
      <div className='relative top-[18rem] flex flex-col items-center p-2'>
        <SingleChef chefData={data} />
        <ChefRecipe chefRecipeData={data} />
      </div>
    </>
  )
}
export default ChefRecipes