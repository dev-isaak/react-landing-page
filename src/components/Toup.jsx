import React from 'react'
import {
    BsArrowUpSquareFill
} from 'react-icons/bs'
import {
    Link
  } from 'react-scroll'

const Toup = () => {
  return (
    <div>
        <div className='fixed w-10 h-10 bottom-5 right-5 hidden'>
            <Link  className='' to="navbar"  smooth={true}  duration={500}>
                <BsArrowUpSquareFill className='cursor-pointer' size={35} color='#00df9a'/>
            </Link>
        </div>
    </div>
  )
}

export default Toup