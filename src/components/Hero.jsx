import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <div name="home" className='text-black relative z-auto '>
      <div className='md:mt-[250px] mt-[200px] h-screen mx-auto text-center justify-center grid lg:grid-cols-2'>
        <div className='rounded-2xl'>
          <h1 className='md-text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#f2f2f2]'>Hey, I'm Gonçalo</h1>
          <div className='flex justify-center items-center'>
            <Typed className='md:text-5xl sm:text-4xl mt-[10px] text-xl font-bold pl-2 text-[#f2f2f2]' strings={['Software Engineer', 'Front End', 'Web Developer']} typeSpeed={120} backSpeed={140} loop/>
          </div>
          <div className=''>
            <Link to="contact" smooth={true} offset={0} duration={500}>
              <button className='bg-[#4825C7] hover:bg-[#4825C7]/80 hover:shadow-lg md:w-[300px] w-[200px] text-xl rounded-md my-6 mx-auto py-3 text-white font-semibold'>
                Talk with me
              </button>
            </Link>
          </div>
        </div>
        <div>
          <Spline scene="https://prod.spline.design/ZEoIiLE1SN2o0XWp/scene.splinecode" className='md:mt-[-300px] md:w-[100px]' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
