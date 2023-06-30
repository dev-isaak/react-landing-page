import React from 'react'
import ImageLaptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div name='analytics' className='w-full bg-white py-16  px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={ImageLaptop} alt="/" />
                <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta eaque consequuntur cupiditate consectetur ea. Laboriosam provident dignissimos natus illum dolores neque harum, nisi nobis, excepturi officiis tenetur unde ut.</p>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics