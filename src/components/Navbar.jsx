import React, { useState } from 'react'
import IconMenu from './IconMenu'
import logo from '../icons/b-logo1.png'

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false)
  const handleClick = () => {
    setToggleNav(!toggleNav)
  }
  return (
    <header className='w-full fixed bg-opacity-70 backdrop-blur-md bg-base-200 z-50'>
      <nav className='navbar flex-col items-start md:flex-row max-w-screen-xl mx-auto'>
        <div className='flex-1'>
          <a className='btn btn-ghost normal-case text-xl text-primary'>
            <div className='max-w-[2rem]'>
              <img src={logo.src} width={50} className='w-full' />
            </div>
            {/* Bryanth<span className='text-secondary font-bold'>Briones</span> */}
          </a>
        </div>
        <button
          className='btn btn-ghost md:hidden text-3xl absolute right-4'
          onClick={handleClick}
        >
          <IconMenu />
        </button>
        <div className={`${toggleNav ? '' : 'hidden'} md:flex md:flex-none`}>
          <ul className='menu menu-vertical md:menu-horizontal px-1'>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
