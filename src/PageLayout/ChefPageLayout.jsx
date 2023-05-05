import { Outlet } from "react-router-dom"
import Navbar from "../SharedPage/Navbar"
import Footer from "../SharedPage/Footer"
import { ToastContainer } from "react-toastify"
import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"
import LoadingSpinner from "../Components/LoadingSpinner"

const ChefPageLayout = () => {
  const { loading } = useContext(AuthContext)
  if (loading) {
      return <LoadingSpinner/>
  }
  return (
    <>
      <Navbar />
      <div className='min-h-[calc(100vh-140px)]'>
        <Outlet></Outlet>
      </div>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default ChefPageLayout