// app/api/resume/profile/route.ts
import { NextResponse } from 'next/server';

// GET /api/resume/profile - get profile information
export async function GET() {
    try {
        // 这里通常会有数据库操作
        return NextResponse.json({
            message: `- Familiar with Java back-end development, able to develop back-end based on Spring Boot frameworks.\n
			- Experienced in H5 front-end programming, proficient in utilizing HTML/CSS, JavaScript, TypeScript, and well-versed in the Vue front-end framework.\n
			- Conversant with typical Linux directives, capable of configuring the Nginx middleware and using Oracle, MySQL, and Redis databases.\n
			- Skilled in using IDEA, Git, Maven, Postman, etc.\n
			- Co-operative and friendly, also adaptable and responsive.`,
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to get profile' },
            { status: 500 },
        );
    }
}
