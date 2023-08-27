import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import background from '../assets/background4.jpeg';

const Contact = () => {
  

  return (
    <div className='text-black bg-[#E3E3E3] relative z-auto' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div name='contact' className=' h-screen backdrop-blur-sm flex justify-center items-center p-4' >
      <form className='flex flex-col max-w-[600px] w-full'>
        <div className='p-8 backdrop-blur-sm bg-[#e3e3e3]/50 rounded-xl mb-4'>
          <p className='text-4xl font-bold inline text-black border-b-4 border-[#e3e3e3]'>Contact</p>
          <p className='text-black font-semibold py-4'>Submit the form below or send us an email</p>
          <p className='text-black font-semibold'>Email - intihousefurnas@gmail.com</p>
          <p className='text-black font-semibold'>Name - Patrícia Estrela</p>
          <p className='text-black font-semibold'>Phone - (+351) 965412612</p>
        </div>
        <input type="text" name="user_name" className='backdrop-blur-sm bg-[#e3e3e3]/80 p-2 rounded-xl enabled:hover:border-gray-400 focus:ring-[#417154]' placeholder='Name' required/>
        <input className='my-4 p-2 backdrop-blur-sm bg-[#e3e3e3]/80 rounded-xl enabled:hover:border-gray-400 focus:ring-[#417154]' type="email" placeholder='Email' name='user_email' required/>
        <textarea className='backdrop-blur-sm bg-[#e3e3e3]/80 p-2 rounded-xl enabled:hover:border-gray-400 focus:ring-[#417154]' name="message" rows="10" placeholder='Message' required></textarea>
        <input className='text-white border-2 bg-[#6D9775] hover:bg-[#417154] hover:border-[#417154] hover:text-white px-4 py-3 my-8 mx-auto flex items-center rounded-xl font-bold' type="submit" value="Send" />
      </form>

      
    </div>
    </div>
  );
};

export default Contact;
