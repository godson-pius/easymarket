import React from 'react'

const Banner = ({ page }) => {
  return (
    <div className='text-white border-b border-slate-700 py-20'>
        <div className='w-full mx-auto text-center flex flex-col'>
            <p className='text-[#00df9a] font-bold p-2'>Easy Market</p>
            <h1 className='text-4xl font-bold sm:text-4xl md:text-7xl'>{ page }</h1>
            <p className='py-2 px-10 font-bold text-slate-600'>Home / {page.replace(' ', '-')}</p>
            
        </div>
    </div>
  )
}

export default Banner