import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className=' p-2 md:p-4'>
      <footer class=" rounded-lg shadow bg-[#f2f2f2] m-4">
          <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
              <div class="md:flex md:justify-between">
                <div>
                    <Link to='navbar' smooth={true} duration={500} class="flex items-center  cursor-pointer">
                      <img src={logo} className='w-[50px]  my-4 mr-3 rounded-[10px]' alt="casainti Logo" />
                      <span class="self-center text-2xl font-semibold whitespace-nowrap text-[#4825C7] ">Gonçalo Pinto</span>
                    </Link>
                </div>
                <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                    <div>
                      <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        
                        <li>
                          <Link to='about' smooth={true} duration={500} className='text-[#0C134F]  font-bold cursor-pointer'>
                            <a class="mr-4 hover:underline md:mr-6">About</a>
                          </Link>
                        </li>
                        <li>
                          <Link to='skills' smooth={true} duration={500} className='text-[#0C134F]  font-bold cursor-pointer'>
                            <a class="mr-4 hover:underline md:mr-6">Skills</a>
                          </Link>
                        </li>
                        <li className=' '>
                          <a href='https://github.com/GoncaloPinto03'  className='text-[#0C134F] font-bold cursor-pointer'>
                            <AiFillGithub size={30}/>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul class="text-gray-500 dark:text-gray-400 font-medium ">
                        <li>
                          <Link to='work' smooth={true} duration={500} className='text-[#0C134F]  font-bold cursor-pointer'>
                            <a class="mr-4 hover:underline md:mr-6">Work</a>
                          </Link>
                        </li>
                        <li>
                          <Link to='contact' smooth={true} duration={500} className='text-[#0C134F] font-bold cursor-pointer'>
                            <a class="mr-4 hover:underline md:mr-6">Contact</a>
                          </Link>
                        </li>
                        <li className=' '>
                          <a href='https://www.linkedin.com/in/gon%C3%A7alo-pinto-a81900239/'  className='text-[#0C134F] font-bold cursor-pointer'>
                            <AiFillLinkedin size={30}/>
                          </a>
                        </li>
                      </ul>
                    </div>
                </div>
            </div>
            <hr class="my-6 border-[#263126] sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between">
                <span class="text-sm text-black-500 sm:text-center dark:text-gray-700 font-semibold">© 2023 <a class="hover:underline">Gonçalo Pinto</a>. All Rights Reserved.
                </span>
            </div>
          </div>
      </footer>
    </div>
  );
};

export default Footer;
