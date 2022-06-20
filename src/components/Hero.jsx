import React from 'react'
import { Link } from 'react-router-dom'
import Typed from 'react-typed'

function Hero() {
  return (
    <div className='text-white mt-20'>
        <div className='mt-5 w-full mx-auto h-96 text-center flex flex-col'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH EASY MARKET</p>
            <h1 className='text-4xl font-bold sm:text-4xl md:text-7xl'>Free Marketing</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, Flexible financing for</p>
                <Typed 
                className='md:text-5xl sm:text-4xl text-xl font-bold ml-2 text-slate-700'
                strings={['Businesses', 'Startups', 'Entrepreneurs']}
                typeSpeed={120}
                backSpeed={140}
                loop
                />
            </div>
            <p className='py-2 px-10 font-bold text-slate-600'>Monitor your products youself with a customized dashboard</p>
            <Link to='/auth'>
            <button className='bg-[#00df9a] w-[200px] mx-auto rounded-md my-4 font-medium p-2 text-black hover:bg-white transition duration-700 ease-in-out hover:scale-110 hover:-translate-y-1'>Get Started</button>
            </Link>
        </div>
    </div>
  )
}

export default Hero