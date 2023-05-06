import React, { useContext } from 'react'
import ChefRecipieBanner from './ChefRecipieBanner'
import SingleChef from './SingleChef'
import ChefRecipe from './ChefRecipe'
import { useLoaderData } from 'react-router-dom'
const ChefRecipes = () => {
  const data = useLoaderData()
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