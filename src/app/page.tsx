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
    ];

    return (
        <main className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            <MySwiper slides={slides} />
        </main>
    );
}
