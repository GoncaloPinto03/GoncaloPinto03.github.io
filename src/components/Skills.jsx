import React from 'react';
import skills from '../assets/skills.png';

const Skills = () => {


  return (
    <div className='p-6 justify-center flex items-center'>
      <div name="skills" className='rounded-3xl w-[1240px] max-w-[1240px] '>
        <div className='flex flex-col justify-center p-2'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#f2f2f2]'>SKILLS</h1>
        </div>
        <div className='bg-[#4825c7]/80 rounded-2xl flex justify-center items-center'>
            <img src={skills} className=' h-[300px] sm:h-[450px] w-auto '></img>
            
        </div>
        
      </div>
    </div>
  );
}

export default Skills;
