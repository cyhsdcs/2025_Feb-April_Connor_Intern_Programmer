'use client'
import { useState, useRef } from 'react'
import { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { SlideSection } from './slide_section'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import '../swiper-custom.css'

interface SliderProps {
  slides: SlideSection[];
}

export default function MySwiper({ slides }: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef<SwiperType | undefined>(undefined);

  const handlePrev = () => {
    if (swiperRef.current) {
      let newIndex = currentSlide;
      if (currentSlide > 0) {
        newIndex = currentSlide - 1;
      }
      swiperRef.current.slideTo(newIndex);
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      let newIndex = currentSlide;
      if (currentSlide < slides.length - 1) {
        newIndex = currentSlide + 1;
      }
      swiperRef.current.slideTo(newIndex);
    }
  };

  return (
    <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="relative w-full">
        <button
          onClick={handlePrev}
          className="slider-nav-btn slider-nav-btn-left"
        >
          <ChevronLeftIcon className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
        <button
          onClick={handleNext}
          className="slider-nav-btn slider-nav-btn-right"
        >
          <ChevronRightIcon className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] md:aspect-[16/9]">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setCurrentSlide(swiper.activeIndex);
            }}
            className="w-full h-full"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="w-full h-full">
                <div className="w-full h-full p-4 sm:p-6 md:p-8 overflow-auto">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                    {slide.title}
                  </h2>
                  <div className="w-full">{slide.component()}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4 sm:mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-blue-500 scale-125" : "bg-gray-300"
            }`}
            onClick={() => swiperRef.current?.slideTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
