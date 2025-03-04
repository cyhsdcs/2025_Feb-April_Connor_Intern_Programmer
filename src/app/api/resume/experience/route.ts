// app/api/resume/experience/route.ts
import { NextResponse } from 'next/server';

// GET /api/resume/experience - get experience information
export async function GET() {
    try {
        // 这里通常会有数据库操作
        return NextResponse.json({
            message: `Agricultural Bank of China, Shenzhen Branch 07/2022 – 06/2024\n
			Assistant Product Developer of Technology and Product Management Department, Development Division II\n
			Engaged as a project manager or development team member in the design, development, testing, and maintenance of IT systems.\n\n
			
			eBRAM International Online Dispute Resolution Centre Limited – Spring Intern	02/2025 – 04/2025\n
			Software Developer\n
			Programming and support of LawTech application systems`,
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to get experience' },
            { status: 500 },
        );
    }
}
