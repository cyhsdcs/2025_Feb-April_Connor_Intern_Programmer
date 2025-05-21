'use client';
import { useState, useEffect, useRef } from 'react';
import { workApi } from '@/app/utils/api-client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import 'swiper/css';
import 'swiper/css/pagination';

interface WorkData {
    work1: string;
    work2: string;
}

const workplaceImages = [
    "/images/workplace/workplace.png",
    "/images/workplace/workplace2.png",
    "/images/workplace/workplace3.png",
]

const Page2 = () => {
    const [workData, setWorkData] = useState<WorkData>({
        work1: '',
        work2: '',
    });
    const [error, setError] = useState<string>();
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        async function loadWorkData() {
            try {
                const [work1, work2] = await Promise.all([
                    workApi.getWork1(),
                    workApi.getWork2(),
                ]);

                setWorkData({
                    work1: work1.message,
                    work2: work2.message,
                });
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load work experience data');
            } finally {
                setLoading(false);
            }
        }

        loadWorkData();
    }, []);


    const [currentSlide, setCurrentSlide] = useState(0);
    const swiperRef = useRef<SwiperType | null>(null);

    const handlePrev = () => {
        swiperRef.current?.slidePrev();
    };

    const handleNext = () => {
        swiperRef.current?.slideNext();
    };

    if (loading) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
    if (error) return <div className="text-red-500 p-4">Error: {error}</div>;

    return (
        <div className="w-full">
            <h2 className="text-2xl text-abc-green sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 
                            border-b-2 border-abc-green pb-2 inline-block">
                MEMORABLE WORK EXPERIENCE
            </h2>
            <div className="text-center my-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-abc-green transform hover:scale-105 transition-transform">
                    Two Years in ABC
                </h1>
            </div>
            <article className="w-full bg-white p-6 rounded-lg shadow-xl">
                <h2 className="text-2xl font-semibold mb-4 text-abc-green">Impressed with ☺️</h2>
                <div className="flex flex-row w-full h-auto">
                    <div className="whitespace-pre-line w-1/4 text-xl">{workData.work1}</div>
                    <div className="relative w-3/4 h-auto">
                        {/* 上翻按钮 */}
                        <button 
                            onClick={handlePrev}
                            className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10 p-1
                                        bg-white/80 hover:bg-white rounded-full shadow-md"
                        >
                            <ChevronUpIcon className="w-5 h-5" />
                        </button>
                        
                        {/* 轮播图 */}
                        <Swiper
                            direction="vertical"
                            slidesPerView={1}
                            spaceBetween={30}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            onSlideChange={(swiper) => {
                                setCurrentSlide(swiper.activeIndex);
                            }}
                            className="w-full h-[500px]"
                        >
                            {workplaceImages.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img 
                                        src={image} 
                                        alt={`workplace ${index + 1}`} 
                                        className="w-full h-full object-contain" 
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        
                        {/* 下翻按钮 */}
                        <button 
                            onClick={handleNext}
                            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10 p-1
                                        bg-white/80 hover:bg-white rounded-full shadow-md"
                        >
                            <ChevronDownIcon className="w-5 h-5" />
                        </button>
                        
                        {/* 指示器 */}
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-1 z-10">
                            {workplaceImages.map((_, index) => (
                                <button
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all ${
                                    currentSlide === index
                                    ? 'bg-abc-green scale-125'
                                    : 'bg-gray-300'
                                }`}
                                onClick={() => swiperRef.current?.slideTo(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </article>

            {/* <div className="flex justify-end my-6">
                <button 
                    onClick={() => setShowModal(true)}
                    className="px-4 py-2 bg-white text-abc-green hover:bg-red-600 hover:text-white rounded-lg shadow-md transition-colors"
                >
                    And…
                </button>
            </div> */}
            
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div 
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setShowModal(false)}
                    ></div>
                    
                    <div className="relative z-10 max-w-2xl w-full mx-4 animate-fade-in-up">
                        <article className="w-full bg-white p-6 rounded-lg shadow-xl">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-semibold text-red-400">However 😅</h2>
                                <button 
                                    onClick={() => setShowModal(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex flex-row w-full h-auto">
                                <div className="whitespace-pre-line w-full text-xl">{workData.work2}</div>
                            </div>
                        </article>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page2;
