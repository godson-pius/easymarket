import React from 'react'
import Banner from '../components/Banner';
import Newsletter from '../components/Newsletter';
import Advert from '../components/Advert';

const About = () => {
return (
<>
  <Banner page='About Us' />
  <div className="container flex flex-col justify-center text-center px-10 md:px-20 bg-white h-64 py-5">
    <div className='flex mb-3 mx-auto'>
      <h1 className='text-2xl md:text-3xl font-bold uppercase'>Easy Market</h1>
      <span className='flex h-3 w-3 ml-1'>
        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#00df9a] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00df9a]"></span>
      </span>
    </div>

    <p className='text-md md:text-lg'>Easy Market is a free marketing platform, where merchants come and display their products, theirby making it easy for customers to view and locate them, and as well contact them. Easy Market is powered and sponsored by <a className="text-[#00df9a]" href="https://www.worldbraintechnology.com">World Brain Technology</a></p>
  </div>

  {/* Newsletter */}
  <Newsletter />

  {/* Advert */}
  <Advert />
</>
)
}

export default About