'use client';
import MySwiper from './components/MySwiper';
import { SlideSection } from './components/slide_section';
import Page1 from './components/folder/Page1';
import Page2 from './components/folder/Page2';
import Page3 from './components/folder/Page3';
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
            title: 'Memorable Work Experience',
            component: () => (
                <Page2 />
            ),
        },
        {
            id: 3,
            title: 'Gains in Company',
            component: () => (
                <Page3 />
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
