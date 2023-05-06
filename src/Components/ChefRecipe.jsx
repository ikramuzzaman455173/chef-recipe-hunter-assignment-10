import {  useState } from "react"
import { FaRegStar, FaStar } from "react-icons/fa"
import { MdFavorite } from "react-icons/md"
import Rating from "react-rating"
import { toast } from "react-toastify"
import SectionInfo from "./SectionInfo"
import LoadingSpinner from "./LoadingSpinner"
import LazyLoad from 'react-lazy-load';
import { useNavigation } from "react-router-dom"

const ChefRecipe = ({ chefRecipeData }) => {
  const navigate=useNavigation()
  if (navigate.state==='loading') {
      return <LoadingSpinner/>
  }

  const [favourite, setFavourite] = useState(chefRecipeData.recipes.map(recipe => ({ recipeId: recipe.recipeId, favourite: false })))

  const handleFavourite = (id) => {
    const updatedFavourites = favourite.map(recipe => {
      if (recipe.recipeId === id) {
        return { recipeId: id, favourite: true }
      } else {
        return recipe
      }
    })
    setFavourite(updatedFavourites)
    toast.success("Recipe added to favourites!", { autoClose: 2000, type: 'default' })
  }

  return (
    <>
      <SectionInfo title="Best Recipes Of" heading={chefRecipeData.chefName} />
      <div className='grid md:grid-cols-2 gap-6 mx-4'>
        {chefRecipeData?.recipes?.map(e => <div key={e.recipeId} className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <LazyLoad height={300}>
          <img className="p-2 border-0 rounded w-full h-[300px] object-cover" src={e.recipeImg} alt="recipe img" />
          </LazyLoad>
          <div className="p-5 flex flex-col">
            <h5 className="mb-4 text-2xl font-bold tracking-tight text-slate-700 text-center">{e.recipeName}</h5>
            <div className='flex md:flex-row flex-col gap-6'>
              <div>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-slate-600 decoration-double underline decoration-slate-500">Ingredients:</h5>
                {e.ingredients.map((e, i) => <ul key={i} className='list-disc marker:text-blue-600 pl-5 my-2'>
                  <li className='mb-2 tex-slate-700 font-medium text-lg'>{e}</li>
                </ul>)}
              </div>
              <div>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-slate-600 decoration-double underline decoration-slate-500">Cooking Method:</h5>
                {e.cookingMethod.map((e, i) => <ul key={i} className='list-disc  marker:text-blue-600 pl-5 my-2'>
                  <li className='mb-2 tex-slate-500 font-medium text-md font-Roboto'>{e}</li>
                </ul>)}

              </div>
            </div>
            <div className="flex justify-center items-center">
              <Rating placeholderRating={e.rating} readonly placeholderSymbol={<FaStar />} className='text-yellow-400' emptySymbol={<FaRegStar />} fullSymbol={<FaStar />}>
              </Rating>
              <p className="text-lg pl-2 font-medium text-slate-500 ">{e.rating}</p>
            </div>
            <div className="flex items-center justify-center">
              {favourite.find(recipe => recipe.recipeId === e.recipeId).favourite
                ? <button type="button" className="text-white flex items-center justify-center bg-blue-400 w-1/2 dark:bg-blue-500 cursor-not-allowed font-bold rounded-lg text-md tracking-wider px-5 py-2.5 mt-4 text-center" disabled>Favourite <MdFavorite className="pl-2 text-3xl text-[#d60841]" /> </button>
                : <input type="button" className="awesome-btn px-5 py-3 tracking-wider rounded-md my-2 w-1/2 cursor-pointer" value="Favourite" onClick={() => handleFavourite(e.recipeId)} />}
            </div>
          </div>
        </div>)}
      </div>
    </>
  )
}

export default ChefRecipe