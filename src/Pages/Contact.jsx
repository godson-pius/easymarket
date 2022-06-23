import React from 'react'
import Banner from '../components/Banner';

const Contact = () => {
  return (
    <>
    <Banner page='World Brain Technology Ltd.' />
    <div className='w-full bg-slate-200 py-20 mx-auto px-40'>
      <div className='bg-[#00df9a] rounded-xl p-20 font-black transition duration-700 hover:bg-white hover:text-[#00df9a] mt-[-128px] text-center'>

      <a href="mailto:worldbraintechnology@gmail.com" className='border-2 border-white p-10 rounded-lg hover:bg-[#00df9a] hover:text-white shadow-2xl  transition duration-700'>Contact Us</a>
      </div>
    </div>
    </>
    
  )
}

export default Contact