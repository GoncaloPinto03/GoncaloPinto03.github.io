import React, { useState, useEffect } from 'react';
import person from '../assets/person.jpeg'


const About = () => {
  

  return (
    <div className=' p-2 md:p-4 justify-center flex items-center'>
    <div name="about" className=' bg-[#4825c7]/80 md:p-8 p-4 rounded-3xl m-4 max-w-[1240px]' >
        <div className=' mx-auto grid md:grid-cols-2'>
              <img className='flex mx-auto rounded-[10px]' src={person} alt='/'/>
                
            <div className='flex flex-col justify-center md:p-4 p-2 '>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#ffffff]'>ABOUT</h1>
                <p className='text-justify font-semibold text-[#f2f2f2]'>I'm a third-year student pursuing a Bachelor's degree in Computer Science and Engineering at the Faculty of Engineering, University of Porto. With a passion for programming and a strong desire to learn, I'm eager to embark on new professional experiences.

As a student in the field of Computer Science, I engage in programming daily, continuously honing my skills. I thrive in team environments, having already contributed to group projects during my studies. I also enjoy working on personal projects, which drives me to explore new programming languages and expand my knowledge.

I'm a dedicated student, eager to make my debut in the workforce. I strive daily to successfully accomplish the tasks and goals set before me. I'm excited to apply my skills.</p>
            </div>
        </div>
    </div>
    </div>
  );
}

export default About;