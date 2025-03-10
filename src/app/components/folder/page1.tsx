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
            <section className="w-full">
                <h2 className="text-2xl font-semibold mb-4 text-sky-400">Ability</h2>
                <div className="flex flex-row w-full">
                    <div className="whitespace-pre-line w-3/4">{resumeData.profile}</div>
                    <div className="right-0">
                        <img src="/images/profile.jpg" alt="profile" className="right-0 w-52 h-52 object-cover" />
                    </div>
                </div>
            </section>

            <br></br>
            <br></br>

            <section>
                <h2 className="text-2xl font-semibold mb-4 text-sky-400">Education</h2>
                <div className="flex flex-row w-full">
                    <div className="whitespace-pre-line w-3/4">{resumeData.education}</div>
                    <div className="right-0">
                        <img src="/images/hku.png" alt="profile" className="right-0 w-40 h-40 object-contain" />
                        <img src="/images/sysu.png" alt="profile" className="right-0 w-40 h-40 object-contain" />
                    </div>
                </div>
            </section>

            <br></br>
            <br></br>

            <section>
                <h2 className="text-2xl font-semibold mb-4 text-sky-400">Experience</h2>
                <div className="whitespace-pre-line">{resumeData.experience}</div>
            </section>

            <br></br>
            <br></br>

            <section>
                <h2 className="text-2xl font-semibold mb-4 text-sky-400">Project</h2>
                <div className="whitespace-pre-line">{resumeData.project}</div>
            </section>

            <br></br>
            <br></br>

            <section>
                <h2 className="text-2xl font-semibold mb-4 text-sky-400">Other</h2>
                <div className="whitespace-pre-line">{resumeData.other}</div>
            </section>
        </div>
    );
};

export default Page1;
