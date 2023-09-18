import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Skills = () => {

    const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const imageFileNames = [];
    const numberOfImages = 3; // Change this to the total number of images

    for (let i = 1; i <= numberOfImages; i++) {
      imageFileNames.push(`skill${i}.png`);
    }

    // Dynamically import all images and update the slides state
    Promise.all(
      imageFileNames.map((imageName) =>
        import(`../assets/skills/${imageName}`).then((module) => ({
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
    <div className='p-4 justify-center flex items-center'>
      <div name="skills" className='rounded-3xl w-[1240px] max-w-[1240px]'>
        <div className='flex flex-col justify-center p-2'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#f2f2f2]'>SKILLS</h1>
        </div>
        <div name='about' className='bg-[#d7e0c800] max-w-[1240px] h-[200px] w-full m-auto relative group'>
                <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className=' h-[200px] w-[100px] rounded-2xl bg-center bg-cover duration-500'>
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
      </div>
    </div>
  );
}

export default Skills;
