import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaSignInAlt, FaTimes } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { AuthContext } from '../AuthProvider/AuthProvider';
import ImgTooltip from '../Components/ImgTooltip';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logOut } = useContext(AuthContext)
  return (
    <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 relative z-20 lg:px-8'>
      <div className="relative flex items-center justify-between">
        {/* ====Logo Sectiong===== */}
        <Link to='/' className='inline-flex items-center'>
          <img src="https://html.webinane.com/mazaa/assets/images/logo.png" className="w-16 active' " />
          <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>Chef Mazaa</span>
        </Link>

        {/* ====Nav Item Section===== */}
        <ul className='items-center hidden space-x-8 lg:flex font-bold'>
          <li>
            <NavLink to="/chefpage" className={({ isActive }) => isActive ? 'gradient-text' : 'default'}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'gradient-text' : 'default'}>About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'gradient-text' : 'default'}>Contact Us</NavLink>
          </li>

          <li>
            <NavLink to="/blog" className={({ isActive }) => isActive ? 'gradient-text' : 'default'}>Blog</NavLink>
          </li>

          <li className='flex items-center gap-4'>
            {user ? <>
              <button onClick={logOut} className="login-active" >Log Out <MdLogout className='w-5 h-5 ml-2 -mr-1' /></button>
              <ImgTooltip />
            </> : <><NavLink to="/login" className={({ isActive }) => isActive ? 'login-active' : 'login-btn'}>Log In <FaSignInAlt className='w-5 h-5 ml-2 -mr-1' /></NavLink></>}
          </li>
        </ul>
        {/* ====Mobile NavBar Section===== */}
        <div className="lg:hidden">
          {/* ====dropDownMenu Open Button===== */}
          <button onClick={() => setIsMenuOpen(true)} aria-label='open-menu' title="Open Menu">
            <FaBars className='text-2xl text-gray-600' />
          </button>
          {/* ====dropDown Menu Visible Part Start===== */}
          {isMenuOpen && (<div className='absolute top-0 left-0 w-full z-10'>
            <div className="p-5 bg-white border rounded shadow-sm">
              {/* ====Logo & Button Section===== */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link to='/' className='inline-flex items-center'>
                    <img src="https://html.webinane.com/mazaa/assets/images/logo.png" className="w-16 active" />
                    <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>Chef Mazaa</span>
                  </Link>
                </div>
                {/* ====DropDown Menu Close Button===== */}
                <div>
                  <button aria-label='Close Menu' title='Close Menu' onClick={() => setIsMenuOpen(false)}>
                    <FaTimes className='text-2xl hover:text-blue-500 text-gray-600' />
                  </button>
                </div>
                {/* ====comment===== */}
              </div>
              <nav>
                {/* ====Nav Item Section===== */}
                <ul className='items-center font-bold'>
                  <li className='pb-2'>
                    <NavLink to="/chefpage" className={({ isActive }) => isActive ? 'gradient-text' : 'default'}>Home</NavLink>
                  </li>
                  <li className='pb-2'>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'gradient-text' : 'default'}>About Us</NavLink>
                  </li>
                  <li className='pb-2'>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'gradient-text' : 'default'}>Contact Us</NavLink>
                  </li>

                  <li className='pb-2'>
                    <NavLink to="/blog" className={({ isActive }) => isActive ? 'gradient-text' : 'default'}>Blog</NavLink>
                  </li>

                  <li className='flex items-center gap-4'>
                    {user ? <>
                      <button onClick={logOut} className="login-active" >Log Out <MdLogout className='w-5 h-5 ml-2 -mr-1' /></button>
                      <ImgTooltip />
                    </> : <><NavLink to="/login" className={({ isActive }) => isActive ? 'login-active' : 'login-btn'}>Log In <FaSignInAlt className='w-5 h-5 ml-2 -mr-1' /></NavLink></>}
                  </li>
                </ul>
              </nav>
            </div>
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
