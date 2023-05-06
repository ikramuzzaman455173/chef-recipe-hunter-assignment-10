import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../SharedPage/Navbar"
import Footer from "../SharedPage/Footer"
import { ToastContainer } from "react-toastify"
import LoadingSpinner from "../Components/LoadingSpinner"

const ChefPageLayout = () => {
const navigate=useNavigation()
  if (navigate.state==='loading') {
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