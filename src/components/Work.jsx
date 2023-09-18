import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import {data} from '../utils/data.js'

const Work = () => {
  
  const [projects, setProjects] = useState(data);

  return (
    <div className='p-4 md:p-4 justify-center flex items-center'>
      <div name="work" className='p-2 rounded-3xl m-0 w-[1240px] max-w-[1240px]' >   
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#f2f2f2]'>WORK</h1>
        <div className='mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-4'>
          {projects.map((item, index)=> (
              <div key={index} className='bg-[#f2f2f2]/70  shadow-lg rounded-lg hover:bg-[#f2f2f2]/90 hover:scale-105 duration-300'>
                <a href={item.link}>
                <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg'></img>
                <div className='m-3'>
                  <p  className='text-[#4825C7] font-bold'>{item.name}</p>
                  <p className='text-justify'>
                    <span className='text-[#0C134F] font-semibold '>{item.text}</span>
                  </p>
                </div>
                </a>
              </div>
          ) )}
        </div>
      </div>
    </div>
  );
}

export default Work;