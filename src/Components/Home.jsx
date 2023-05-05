import React, { useContext } from 'react'
import Header from './Header'
import TodayRecipe from './TodayRecipe'
import TopChefs from './TopChefs'
import RecipeProgram from './RecipeProgram'
import SpecialOffer from './SpecialOffer'
import { AuthContext } from '../AuthProvider/AuthProvider'
import LoadingSpinner from './LoadingSpinner'

const Home = () => {
  const { loading } = useContext(AuthContext)
  if (loading) {
      return <LoadingSpinner/>
  }
  return (
    <>
      <Header />
      <div className='relative top-[22rem] flex flex-col items-center p-2'>
        <TodayRecipe />
        <TopChefs />
        <RecipeProgram />
        <SpecialOffer/>
      </div>
    </>
  )
}

export default Home

