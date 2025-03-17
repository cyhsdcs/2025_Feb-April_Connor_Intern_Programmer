'use client';
import { useState, useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { SlideSection } from './slide_section';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../swiper-custom.css';

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
            handleSlideChange(newIndex);
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            let newIndex = currentSlide;
            if (currentSlide < slides.length - 1) {
                newIndex = currentSlide + 1;
            }
            handleSlideChange(newIndex);
        }
    };

    const handleSlideChange = (index: number) => {
        swiperRef.current?.slideTo(index);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="w-full">
            <div className="relative w-full">
                <button
                    onClick={handlePrev}
                    className="fixed left-0 top-1/2 -translate-y-1/2 z-10 p-2 
                              bg-white/80 hover:bg-white rounded-full shadow-md"
                >
                    <ChevronLeftIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>

                <div className="w-full px-12">
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
                            <SwiperSlide
                                key={slide.id}
                                className="w-full h-full"
                            >
                                <div className="w-full h-full p-4 sm:p-6 md:p-8 overflow-auto">
                                    <div className="w-full">
                                        {slide.component()}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <button
                    onClick={handleNext}
                    className="fixed right-0 top-1/2 -translate-y-1/2 z-10 p-2 
                              bg-white/80 hover:bg-white rounded-full shadow-md"
                >
                    <ChevronRightIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
            </div>

            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center gap-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                            currentSlide === index
                                ? 'bg-blue-500 scale-125'
                                : 'bg-gray-300'
                        }`}
                        onClick={() => swiperRef.current?.slideTo(index)}
                    />
                ))}
            </div>
        </div>
    );
}
