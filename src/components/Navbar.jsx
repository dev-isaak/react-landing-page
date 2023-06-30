import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import {
  Link
} from 'react-scroll'

const Navbar = () => {
  const [ nav,setNav ] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div name='navbar' className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>
          <Link className='hover:cursor-pointer hover:text-[#00df9a] transition-all duration-300' to="analytics"  smooth={true}  duration={500}>
            Manage
          </Link>
        </li>
        <li className='p-4 min-w-fit'>
          <Link  className='hover:cursor-pointer hover:text-[#00df9a] transition-all duration-300' to="newsletter"  smooth={true}  duration={500}>
            News Letter
          </Link>
        </li>
        <li className='p-4'>
          <Link className='hover:cursor-pointer hover:text-[#00df9a] transition-all duration-300'  to="cards"  smooth={true}  duration={500}>
            Prices
          </Link>
        </li>
      </ul>
      <div onClick={ handleNav } className='block md:hidden'>
        { nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }
      </div>
      <div className={ nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]' }>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
        <ul className='pt-12 uppercase p-4'>
          <li className='p-4 border-b border-gray-600'>
          <Link  to="analytics"  smooth={true}  duration={500}>
            Manage
          </Link>
          </li>
          <li className='p-4 border-b border-gray-600'>
          <Link   to="newsletter"  smooth={true}  duration={500}>
            News Letter
          </Link>
          </li>
          <li className='p-4 border-b border-gray-600'>
          <Link   to="cards"  smooth={true}  duration={500}>
            Prices
          </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;