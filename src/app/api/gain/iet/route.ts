// app/api/gain/iet/route.ts
import { NextResponse } from 'next/server';

// GET /api/gain/iet - get iet information
export async function GET() {
    try {
        // 这里通常会有数据库操作
        return NextResponse.json({
            message: `- Exploring latest construction technology through adopting Digital Twins Technology.\n
                - A potential career path\n
                - More combination? Delivery, healthcare, agriculture, etc`,
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json(
            { error: 'Failed to get iet'+message },
            { status: 500 },
        );
    }
}
