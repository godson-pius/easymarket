import React from 'react'

const Loader = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 justify-center gap-8'>
        <div className='bg-gray-100 animate-pulse h-96 w-full rounded-2xl p-5'>
            <div className='w-full bg-gray-300 h-8 rounded-md mb-64'></div>
            <div className='w-full bg-gray-300 h-8 rounded-md'></div>
            <div className='w-[150px] bg-gray-300 h-5 mt-3 mx-auto rounded-md'></div>
        </div>
        <div className='bg-gray-100 animate-pulse h-96 w-full rounded-2xl p-5'>
            <div className='w-full bg-gray-300 h-8 rounded-md mb-64'></div>
            <div className='w-full bg-gray-300 h-8 rounded-md'></div>
            <div className='w-[150px] bg-gray-300 h-5 mt-3 mx-auto rounded-md'></div>
        </div>
        <div className='bg-gray-100 animate-pulse h-96 w-full rounded-2xl p-5'>
            <div className='w-full bg-gray-300 h-8 rounded-md mb-64'></div>
            <div className='w-full bg-gray-300 h-8 rounded-md'></div>
            <div className='w-[150px] bg-gray-300 h-5 mt-3 mx-auto rounded-md'></div>
        </div>
        <div className='bg-gray-100 animate-pulse h-96 w-full rounded-2xl p-5'>
            <div className='w-full bg-gray-300 h-8 rounded-md mb-64'></div>
            <div className='w-full bg-gray-300 h-8 rounded-md'></div>
            <div className='w-[150px] bg-gray-300 h-5 mt-3 mx-auto rounded-md'></div>
        </div>
    </div>
  )
}

export default Loader