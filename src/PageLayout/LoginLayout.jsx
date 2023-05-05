import React, { useContext } from 'react'
import Navbar from '../SharedPage/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../SharedPage/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const LoginLayout = () => {
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
