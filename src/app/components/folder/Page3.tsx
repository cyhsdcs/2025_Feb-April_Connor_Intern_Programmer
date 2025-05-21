'use client';
import { useState, useEffect, useRef } from 'react';
import { gainApi } from '@/app/utils/api-client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

interface gainData {
    tsa: string;
    iet: string;
    code: string;
}

const sport_arbitration_images = [
    "/images/sport_arbitration/sports_arbitration1.jpg",
    "/images/sport_arbitration/sports_arbitration2.jpg",
]

const IET_images = [
    "/images/IET.jpg",
]

const Page3 = () => {
    const [gainData, setGainData] = useState<gainData>({
        tsa: '',
        iet: '',
        code: ''
    });
    const [error, setError] = useState<string>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadGainData() {
            try {
                const [tsa, iet, code] = await Promise.all([
                    gainApi.getTSA(),
                    gainApi.getIET(),
                    gainApi.getCode(),
                ]);

                setGainData({
                    tsa: tsa.message,
                    iet: iet.message,
                    code: code.message,
                });
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load gain data');
            } finally {
                setLoading(false);
            }
        }

        loadGainData();
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 
                            border-b-4 border-custom-greenblue pb-2 inline-block">
                <span className="text-custom-blue">My days in </span>
                <span className="text-custom-green">e</span>
                <span className="text-custom-blue">BRAM</span>
            </h2>
            <article className="w-full bg-white p-6 rounded-lg shadow-xl">
                <div className="flex flex-row w-full h-auto">
                    <div className="w-1/3">
                        <h2 className="text-2xl font-semibold mb-4 text-custom-blue">Technology x Sports Arbitration</h2>
                        <div className="whitespace-pre-line text-xl">{gainData.tsa}</div>
                    </div>
                    <div className="relative w-2/3 h-auto">
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
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 5000,          // 5秒切换一次
                                disableOnInteraction: false,  // 用户交互后依然继续自动切换
                                pauseOnMouseEnter: true,      // 鼠标悬停时暂停
                            }}
                            loop={true}                       // 循环播放
                            speed={800} 
                        >
                            {sport_arbitration_images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <Image
                                        src={image}
                                        width = {1000}
                                        height = {1000}
                                        alt={`sa ${index + 1}`} 
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
                            {sport_arbitration_images.map((_, index) => (
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

            <br></br>
            <br></br>

            <article className="w-full bg-white p-6 rounded-lg shadow-xl">
                <div className="flex flex-row w-full">
                    <div className="w-1/3">
                        <h2 className="text-2xl font-semibold mb-4 text-custom-blue">Technical Visit to Digital Twins Centre</h2>
                        <div className="whitespace-pre-line text-xl">{gainData.iet}</div>
                    </div>
                    <div className="relative w-2/3 h-auto">
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
                            {IET_images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <Image
                                        src={image} 
                                        width = {1000}
                                        height = {1000}
                                        alt={`IET ${index + 1}`} 
                                        className="w-full h-full object-contain" 
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </article>

            <br></br>
            <br></br>

            <article className="w-full bg-white p-6 rounded-lg shadow-xl">
                <div className="flex flex-row w-full">
                    <div className="w-1/3">
                        <h2 className="text-2xl font-semibold mb-4 text-custom-blue">
                            Coding Task
                        </h2>
                        <div className="whitespace-pre-line text-xl">{gainData.code}</div>
                    </div>
                    <div className="relative w-2/3 h-[500px] overflow-hidden">
                        <div className="absolute w-full animate-scroll-vertical">
                            <Image
                                src="/images/code.jpg" 
                                width = {1000}
                                height = {1000}
                                alt="scrolling" 
                                className="w-full object-cover"
                            />
                            {/* 复制一份图片实现无缝循环 */}
                            <Image
                                src="/images/code.jpg" 
                                width = {1000}
                                height = {1000}
                                alt="scrolling" 
                                className="w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Page3;
