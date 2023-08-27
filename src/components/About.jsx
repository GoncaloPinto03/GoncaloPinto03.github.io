import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const About = () => {
  
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const imageFileNames = [];
    const numberOfImages = 41; // Change this to the total number of images

    for (let i = 1; i <= numberOfImages; i++) {
      imageFileNames.push(`img${i}.jpeg`);
    }

    // Dynamically import all images and update the slides state
    Promise.all(
      imageFileNames.map((imageName) =>
        import(`../assets/home_imgs/${imageName}`).then((module) => ({
          url: module.default,
        }))
      )
    ).then((importedSlides) => setSlides(importedSlides));
  }, []);

  if (slides.length === 0) {
    // Return a loading indicator or null while the images are being fetched
    return null;
  }

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='bg-[#4825C7] p-2 md:p-4 justify-center flex items-center'>
    <div name="about" className=' bg-[#fef8eb] md:p-8 p-4 rounded-3xl m-4 max-w-[1240px]' >
        <div className=' mx-auto grid md:grid-cols-2'>
            <div name='about' className='bg-[#fef8eb] max-w-[1240px] h-[600px] w-full m-auto   relative group'>
                <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
                </div>
                {/* Left Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
            </div>
            <div className='flex flex-col justify-center md:p-4 p-2 '>
                <p className='text-[#6D9775] font-bold'>ABOUT</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>CASA INTI</h1>
                <p className='text-justify font-semibold'>Boasting garden views, CASA INTI / INTI HOUSE FURNAS offers accommodation with a patio and a coffee machine, around 1.9 km from Fumarolas. Featuring city and quiet street views, this bed and breakfast also features free WiFi.

The bed and breakfast is fitted with 3 bedrooms, 1 bathroom, bed linen, towels, a flat-screen TV with satellite channels, a dining area, a fully equipped kitchen, and a terrace with mountain views.

The bed and breakfast offers an outdoor fireplace. CASA INTI / INTI HOUSE FURNAS has a barbecue and a garden, which can be enjoyed by guests if the weather permits.

Lagoa das Furnas is 3.5 km from the accommodation, while Pico do Ferro is 6 km from the property. The nearest airport is João Paulo II Airport, 47 km from CASA INTI / INTI HOUSE FURNAS.</p>
            </div>
        </div>
    </div>
    </div>
  );
}

export default About;