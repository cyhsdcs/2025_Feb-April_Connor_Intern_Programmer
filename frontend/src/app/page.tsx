'use client'
import { useState, useRef } from 'react'
import { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

// 添加自定义样式
import './swiper-custom.css'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

type SlideSection = {
  id: number;
  title: string;
  component: () => React.ReactNode;
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef<SwiperType | undefined>(undefined);

  const slides: SlideSection[] = [
    {
      id: 1,
      title: "个人简介",
      component: () => (
        <div className="max-w-2xl w-full space-y-6">
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">关于我</h2>
            <p className="text-gray-700">
              {/* 在这里添加您的个人介绍 */}
              我是一名热爱技术的开发者，专注于...
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">技能专长</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>前端开发: React, Next.js, TypeScript</li>
              <li>后端开发: Node.js, Python</li>
              <li>其他技能...</li>
            </ul>
          </section>
        </div>
      )
    },
    {
      id: 2,
      title: "难忘的工作经历",
      component: () => (
        <div className="max-w-2xl w-full">
          <article className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">项目名称</h2>
            <div className="space-y-4">
              <section>
                <h3 className="text-xl font-medium mb-2">项目背景</h3>
                <p className="text-gray-700">
                  {/* 添加项目背景描述 */}
                </p>
              </section>
              {/* 其他项目内容... */}
            </div>
          </article>
        </div>
      )
    },
    {
      id: 3,
      title: "在公司的收获",
      component: () => (
        <div className="max-w-2xl w-full space-y-6">
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">技术成长</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>掌握了新的技术栈...</li>
              <li>提升了代码质量...</li>
              <li>学习了最佳实践...</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">工具使用</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>版本控制工具: Git</li>
              <li>项目管理工具: Jira</li>
              <li>协作工具: Confluence</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">团队协作</h2>
            <p className="text-gray-700">
              参与了多个跨部门项目，提升了沟通能力和团队协作技能。
              通过Code Review和技术分享，与团队成员互相学习和成长。
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">其他收获</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>敏捷开发流程</li>
              <li>项目规划能力</li>
              <li>问题解决能力</li>
            </ul>
          </section>
        </div>
      )
    },
    {
      id: 4,
      title: "工程专题研究",
      component: () => (
        <div className="max-w-2xl w-full space-y-6">
          {[1, 2, 3].map((topic) => (
            <section key={topic} className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4">专题 {topic}</h2>
              <p className="text-gray-500 mb-4">待更新...</p>
              <div className="space-y-2">
                <h3 className="text-xl font-medium">参与人员</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>待定</li>
                  <li>待定</li>
                  <li>待定</li>
                </ul>
              </div>
            </section>
          ))}
        </div>
      )
    }
  ];

  const handlePrev = () => {
    if (swiperRef.current) {
      const newIndex = (currentSlide - 1 + slides.length) % slides.length;
      swiperRef.current.slideTo(newIndex);
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      const newIndex = (currentSlide + 1) % slides.length;
      swiperRef.current.slideTo(newIndex);
    }
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Navigation buttons */}
        <div className="relative w-full">
          <button
            onClick={handlePrev}
            className="absolute -left-4 sm:-left-8 md:-left-12 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white/80 hover:bg-white rounded-full shadow-md transition-all"
          >
            <ChevronLeftIcon className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          <button
            onClick={handleNext}
            className="absolute -right-4 sm:-right-8 md:-right-12 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white/80 hover:bg-white rounded-full shadow-md transition-all"
          >
            <ChevronRightIcon className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Swiper container */}
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

        {/* Navigation dots */}
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
    </main>
  );
}
