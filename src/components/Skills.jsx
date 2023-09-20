import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import skills from '../assets/skills.png';

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
