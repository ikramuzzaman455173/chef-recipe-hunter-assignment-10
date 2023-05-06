import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LoadingSpinner from '../Components/LoadingSpinner'
import Footer from '../SharedPage/Footer'
import Navbar from '../SharedPage/Navbar'

const LoginLayout = () => {
  const naviagate = useNavigation()
  if (naviagate.state === 'loading') {
    return <LoadingSpinner />
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
export default LoginLayout
