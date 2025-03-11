'use client';
import { useState, useEffect } from 'react';
import { userApi } from '@/app/utils/api-client';

interface ResumeData {
    profile: string;
    experience: string;
    education: string;
    project: string;
    other: string;
}

const Page1 = () => {
    const [resumeData, setResumeData] = useState<ResumeData>({
        profile: '',
        experience: '',
        education: '',
        project: '',
        other: '',
    });
    const [error, setError] = useState<string>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadResumeData() {
            try {
                const [profile, experience, education, project, other] = await Promise.all([
                    userApi.getProfile(),
                    userApi.getExperience(),
                    userApi.getEducation(),
                    userApi.getProject(),
                    userApi.getOther(),
                ]);

                setResumeData({
                    profile: profile.message,
                    experience: experience.message,
                    education: education.message,
                    project: project.message,
                    other: other.message,
                });
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load resume data');
            } finally {
                setLoading(false);
            }
        }

        loadResumeData();
    }, []);

    if (loading) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
    if (error) return <div className="text-red-500 p-4">Error: {error}</div>;

    return (
        <div className="w-full">
            <article className="w-full bg-white p-6 rounded-lg shadow-xl">
                <h2 className="text-2xl font-semibold mb-4 text-sky-400">Ability</h2>
                <div className="flex flex-row w-full">
                    <div className="whitespace-pre-line w-3/4">{resumeData.profile}</div>
                    <div className="right-0">
                        <img src="/images/profile.jpg" alt="profile" className="right-0 w-52 h-52 object-cover" />
                    </div>
                </div>
            </article>

            <br></br>
            <br></br>

            <article className="w-full bg-white p-6 rounded-lg shadow-xl">
                <h2 className="text-2xl font-semibold mb-4 text-sky-400">Education</h2>
                <div className="flex flex-row w-full">
                    <div className="whitespace-pre-line w-3/4">{resumeData.education}</div>
                    <div className="right-0">
                        <img src="/images/hku.png" alt="hku" className="right-0 w-40 h-40 object-contain" />
                        <img src="/images/sysu.png" alt="sysu" className="right-0 w-40 h-40 object-contain" />
                    </div>
                </div>
            </article>

            <br></br>
            <br></br>

            <article className="w-full bg-white p-6 rounded-lg shadow-xl">
                <h2 className="text-2xl font-semibold mb-4 text-sky-400">Experience</h2>
                <div className="flex flex-row w-full">
                    <div className="whitespace-pre-line w-3/4">{resumeData.experience}</div>
                    <div className="right-0">
                        <img src="/images/abc.png" alt="abc" className="right-0 w-40 h-40 object-contain" />
                        <img src="/images/ebram.png" alt="abc" className="right-0 w-40 h-40 object-contain" />
                    </div>
                </div>
            </article>

            <br></br>
            <br></br>

            <article className="w-full bg-white p-6 rounded-lg shadow-xl">
                <h2 className="text-2xl font-semibold mb-4 text-sky-400">Project</h2>
                <div className="flex flex-row w-full">
                    <div className="whitespace-pre-line w-3/4">{resumeData.project}</div>
                    <div className="right-0">
                        <img src="/images/kyd.png" alt="kyd" className="right-0 w-80 h-100 object-contain" />
                    </div>
                </div>
            </article>

            <br></br>
            <br></br>

            <article className="w-full bg-white p-6 rounded-lg shadow-xl">
                <h2 className="text-2xl font-semibold mb-4 text-sky-400">Other</h2>
                <div className="whitespace-pre-line">{resumeData.other}</div>
            </article>

            <br></br>
            <br></br>
        </div>
    );
};

export default Page1;
