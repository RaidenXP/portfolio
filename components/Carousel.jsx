'use client';

import Image from "next/image";

import { useState, useEffect } from "react";

import { GoDotFill, GoChevronLeft, GoChevronRight } from 'react-icons/go'

const Carousel = ({ items=[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentSlide === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  }

  const moveToSlide = ( currentIndex ) => {
    setCurrentSlide(currentIndex);
  }

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3500);
    return () => clearInterval(slideInterval)
  }, [nextSlide])

  return (
    <div className="flex flex-col items-center">
      {/**Items*/}
      <div className="relative group overflow-hidden w-[75%] rounded-xl">
        <div 
          className="flex transition-transform ease-in-out duration-500"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`
          }}
        >
          {items.map((slide, slideIndex) => (
            <Image
              key={slide.id}
              src={slide.url}
              alt={`slide + ${slideIndex}`}
              width={550}
              height={700}
              priority={true}
            />
          ))}
        </div>
        
        {/**Arrows*/}
        <button 
          type="button"
          onClick={prevSlide}
          className="hidden group-hover:flex absolute z-30 top-0 left-0 px-4
          cursor-pointer items-center justify-center h-full"
        >
          <div className="text-2xl text-black bg-violet-200 rounded-full p-2">
            <GoChevronLeft/>
          </div>
        </button>
       
        <button
          type="button"
          onClick={nextSlide}
          className="hidden group-hover:flex absolute z-30 top-0 right-0 px-4
          cursor-pointer items-center justify-center h-full"
        >
          <div className="text-2xl text-black bg-violet-200 rounded-full p-2">
            <GoChevronRight/>
          </div>
        </button>
      </div>
      
      {/**Sliders*/}
      <div className="text-center space-x-3 mt-3">
        {items.map((slide, slideIndex) => (
          <button type="button" key={slide.id} className="text-2xl cursor-pointer">
            <GoDotFill className={`hover:fill-violet-700 
              ${currentSlide === slideIndex ? 'fill-violet-700' : 'fill-violet-300'}`}
              onClick={() => moveToSlide(slideIndex)}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default Carousel