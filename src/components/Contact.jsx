import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  

  return (
    <div className='text-black  relative z-auto' >
    <div name='contact' className=' h-screen backdrop-blur-sm flex justify-center items-center p-4' >
      <form className='flex flex-col max-w-[600px] w-full'>
        <div className='p-8 backdrop-blur-sm bg-[#f2f2f2]/60 rounded-xl mb-4'>
          <p className='text-4xl font-bold inline text-black border-b-4 border-[#f2f2f2]'>Contact</p>
          <p className='text-black font-semibold py-4'>Submit the form below or send me an email</p>
          <p className='text-black font-semibold'>Email - gfefpinto@gmail.com</p>
        </div>
        <input type="text" name="user_name" className='backdrop-blur-sm bg-[#f2f2f2]/90 p-2 rounded-xl enabled:hover:border-gray-400 focus:ring-[#f2f2f2]' placeholder='Name' required/>
        <input className='my-4 p-2 backdrop-blur-sm bg-[#f2f2f2]/90 rounded-xl enabled:hover:border-gray-400 focus:ring-[#f2f2f2]' type="email" placeholder='Email' name='user_email' required/>
        <textarea className='backdrop-blur-sm bg-[#f2f2f2]/90 p-2 rounded-xl enabled:hover:border-gray-400 focus:ring-[#f2f2f2]' name="message" rows="10" placeholder='Message' required></textarea>
        <input className='text-white border-2 bg-[#4825C7] hover:bg-[#f2f2f2] hover:border-[#4825C7] hover:text-[#4825C7] px-4 py-3 my-8 mx-auto flex items-center rounded-xl font-bold' type="submit" value="Send" />
      </form>

      
    </div>
    </div>
  );
};

export default Contact;
