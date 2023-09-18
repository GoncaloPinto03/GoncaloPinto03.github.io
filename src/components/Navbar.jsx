import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../assets/logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (

    <div name="navbar"className='relative z-40 md:backdrop-blur-sm  max-w-[1240px] rounded-2xl m-2 mx-auto'>
      <div className='flex justify-between items-center h-24  mx-auto px-4 text-black lg:rounded-2xl'>
      <img className='w-[50px] mx-auto my-4 mr-3 rounded-[10px]' src={logo} alt='/'/>
        <h1 className='w-full text-3xl font-bold  text-[#f2f2f2] cursor-pointer'>
          <Link to='navbar' smooth={true} duration={500}>
            Gonçalo Pinto
          </Link>
        </h1>
        <ul className='hidden md:flex font-bold text-xl text-[#f2f2f2] items-center'>
        
          <li className='p-4 cursor-pointer'>
            <Link to='about' smooth={true} offset={0} duration={500}>
              About
            </Link>
          </li>
          <li className='p-4 cursor-pointer'>
            <Link to='skills' smooth={true} offset={0} duration={500}>
              Skills
            </Link>
          </li>
          <li className='p-4 cursor-pointer'>
            <Link to='work' smooth={true} offset={0} duration={500}>
              Work
            </Link>
          </li>
          <li className='p-4 cursor-pointer'>
            <Link to='contact' smooth={true} offset={0} duration={500}>
              Contacts
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineMenu size={20} color="white"/> : <AiOutlineClose size={20} color="white" className='fixed bottom-0 left-0 m-5 z-50'/>}
        </div>
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full backdrop-blur-sm bg-[#4825C7]/60 ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <div className='flex items-center ml-4 my-4'>
          <img className='w-[50px] rounded-[10px]' src={logo} alt='/'/>
          <h1 className=' text-3xl font-bold text-[#f2f2f2] m-4'>Gonçalo</h1>
        </div>
        <ul className='uppercase p-4 font-bold text-[#f2f2f2]'>
          
          <li onClick={handleNav} className='p-4 border-b border-[#0C134F]'>
            <Link to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li onClick={handleNav} className='p-4 border-b border-[#0C134F]'>
            <Link to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li onClick={handleNav} className='p-4 border-b border-[#0C134F]'>
            <Link to='work' smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li onClick={handleNav} className='p-4'>
            <Link to='contact' smooth={true} duration={500}>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

