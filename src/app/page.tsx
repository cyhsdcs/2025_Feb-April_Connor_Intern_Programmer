'use client';
import MySwiper from './components/MySwiper';
import { SlideSection } from './components/slide_section';
import Page1 from './components/folder/page1';
export default function Home() {
    const slides: SlideSection[] = [
        {
            id: 1,
            title: 'PROFILE',
            component: () => (
                <Page1 />
            ),
        },
        {
            id: 2,
            title: '难忘的工作经历',
            component: () => (
                <div className="max-w-2xl w-full">
                    <article className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-2xl font-semibold mb-4">
                            项目名称
                        </h2>
                        <div className="space-y-4">
                            <section>
                                <h3 className="text-xl font-medium mb-2">
                                    项目背景
                                </h3>
                                <p className="text-gray-700">
                                    {/* 添加项目背景描述 */}
                                </p>
                            </section>
                            {/* 其他项目内容... */}
                        </div>
                    </article>
                </div>
            ),
        },
        {
            id: 3,
            title: '在公司的收获',
            component: () => (
                <Page1 />
            ),
        },
        {
            id: 4,
            title: '工程专题研究',
            component: () => (
                <div className="max-w-2xl w-full space-y-6">
                    {[1, 2, 3].map((topic) => (
                        <section
                            key={topic}
                            className="bg-white p-6 rounded-lg shadow"
                        >
                            <h2 className="text-2xl font-semibold mb-4">
                                专题 {topic}
                            </h2>
                            <p className="text-gray-500 mb-4">待更新...</p>
                            <div className="space-y-2">
                                <h3 className="text-xl font-medium">
                                    参与人员
                                </h3>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>待定</li>
                                    <li>待定</li>
                                    <li>待定</li>
                                </ul>
                            </div>
                        </section>
                    ))}
                </div>
            ),
        },
    ];

    return (
        <main className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            <MySwiper slides={slides} />
        </main>
    );
}
