'use client';
import { useState, useEffect } from 'react';
import { studyApi } from '@/app/utils/api-client';

interface studyData {
    study: string;
}

const Page3 = () => {
    const [studyData, setstudyData] = useState<studyData>({
        study:'',
    });
    const [error, setError] = useState<string>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStudyData() {
            try {
                const [study] = await Promise.all([
                    studyApi.getStudy(),
                ]);

                setstudyData({
                    study: study.message,
                });
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load resume data');
            } finally {
                setLoading(false);
            }
        }

        loadStudyData();
    }, []);

    if (loading) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
    if (error) return <div className="text-red-500 p-4">Error: {error}</div>;

    return (
        <div className="w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 
                            border-b-4 border-ebram-greenblue pb-2 inline-block">
                <span className="text-ebram-blue">My days in </span>
                <span className="text-ebram-green">e</span>
                <span className="text-ebram-blue">BRAM</span>
            </h2>
            <article className="w-full bg-white p-6 rounded-lg shadow-xl">
                <h2 className="text-2xl font-semibold mb-4 text-ebram-blue">Activites</h2>
                <div className="flex flex-row w-full">
                    <div className="whitespace-pre-line w-3/4">{studyData.study}</div>
                </div>
            </article>

            <br></br>
            <br></br>
        </div>
    );
};

export default Page3;
