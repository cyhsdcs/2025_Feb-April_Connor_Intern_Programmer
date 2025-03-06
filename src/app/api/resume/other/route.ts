// app/api/resume/other/route.ts
import { NextResponse } from 'next/server';

// GET /api/resume/other - get other information
export async function GET() {
    try {
        // 这里通常会有数据库操作
        return NextResponse.json({
            message:
                'Language: English (IELTS 7.5), Mandarin and Cantonese (native).',
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to get other' },
            { status: 500 },
        );
    }
}
