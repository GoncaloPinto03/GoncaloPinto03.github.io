import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uuuofr7', 'template_ub3qfnw', form.current, 'p3-2Yt5n7kDK-9cqK')
      .then((result) => {
        console.log(result.text);
        console.log('Message sent successfully!');
        setIsMessageSent(true);
        // Clear the form after successful submission
        form.current.reset();
        // Hide the pop-up message after 3 seconds (adjust the timeout as needed)
        setTimeout(() => {
          setIsMessageSent(false);
        }, 3000);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='text-black  relative z-auto' >
    <div name='contact' className=' h-screen backdrop-blur-sm flex justify-center items-center p-4' >
      <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
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
      {/* Show the pop-up message if isMessageSent is true */}
      {isMessageSent && (
        <div className="fixed top-4 right-4 bg-[#4825C7] text-white px-8 py-4 rounded text-2xl">
          Message sent
        </div>
      )}  
      
    </div>
    </div>
  );
};

export default Contact;
