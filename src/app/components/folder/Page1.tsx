'use client';
import Image from 'next/image';

const Page1 = () => {
    const resumeData = {
        profile: `- Familiar with Java back-end development, able to develop back-end based on Spring Boot frameworks.\n
			- Experienced in H5 front-end programming, proficient in utilizing HTML/CSS, JavaScript, TypeScript, and well-versed in the Vue front-end framework.\n
			- Conversant with typical Linux directives, capable of configuring the Nginx middleware and using Oracle, MySQL, and Redis databases.\n
			- Skilled in using IDEA, Git, Maven, Postman, etc.\n
			- Co-operative and friendly, also adaptable and responsive.`,
        experience: `Agricultural Bank of China, Shenzhen Branch 07/2022 – 06/2024\n
			Assistant Product Developer of Technology and Product Management Department, Development Division II\n
			Engaged as a project manager or development team member in the design, development, testing, and maintenance of IT systems.\n\n
			
			eBRAM International Online Dispute Resolution Centre Limited – Spring Intern	02/2025 – 04/2025\n
			Software Developer\n
			Programming and support of LawTech application systems`,
        education: `- The University of Hong Kong\n
			09/2024 - Present\n
			Master of Science in Computer Science (Financial Computing Stream)\n\n
			- Sun Yat-sen University\n
			09/2018 - 06/2022 \n
			Bachelor of Engineering in Software Engineering`,
        project: `Efficient - E Process Service\n
			- Before: \n
			Go to the bank on weekdays\n
            Bring documents and copies\n
            Get in line\n
            - After: \n
            Apply anywhere\n
            Online review\n
            Deliver to the door\n`,
        other: 'Language: English (IELTS 7.5), Mandarin and Cantonese (native).'
    };

    return (
        <div className="w-full">
            <h2 className="text-2xl text-sky-500 sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 \
                            border-b-2 border-sky-300 pb-2 inline-block">
                PROFILE
            </h2>

            <article className="w-full bg-white p-6 rounded-lg shadow-xl">
                <h2 className="text-2xl font-semibold mb-4 text-sky-400 text-center">Chen Yuanhong 陈远泓</h2>
                <div className="whitespace-pre-line text-center">Tel: +852 5620 5053 | Email: cyhnmb@gmail.com | www.linkedin.com/in/yuanhongchen</div>
            </article>

            <br></br>
            <br></br>

            <article className="w-full bg-white p-6 rounded-lg shadow-xl">
                <h2 className="text-2xl font-semibold mb-4 text-sky-400">Ability</h2>
                <div className="flex flex-row w-full">
                    <div className="whitespace-pre-line w-3/4">{resumeData.profile}</div>
                    <div className="right-0">
                        <Image src="/images/profile.jpg" alt="profile" width = {208} height = {208} className="right-0 w-52 h-52 object-contain" />
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
                        <Image src="/images/hku.png" alt="hku" width = {160} height = {160} className="right-0 w-40 h-40 object-contain" />
                        <Image src="/images/sysu.png" alt="sysu" width = {160} height = {160} className="right-0 w-40 h-40 object-contain" />
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
                        <Image src="/images/abc.png" alt="abc" width = {160} height = {160} className="right-0 w-40 h-40 object-contain" />
                        <Image src="/images/ebram.png" alt="abc" width = {160} height = {160} className="right-0 w-40 h-40 object-contain" />
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
                        <Image src="/images/kyd.png" alt="kyd" width = {320} height = {400} className="right-0 w-80 h-100 object-contain" />
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
