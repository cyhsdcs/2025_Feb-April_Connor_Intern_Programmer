// app/api/gain/tsa/route.ts
import { NextResponse } from 'next/server';

// GET /api/gain/tsa - get tsa information
export async function GET() {
    try {
        // 这里通常会有数据库操作
        return NextResponse.json({
            message: `- Valuable experience for first-time participants.\n
                - Primarily responsible for communicating with online guests Dr. Joe.\n
                - Also assisting with equipment handling and setup, etc.\n
                - real teamwork isn't just splitting up work\n
                – it's stepping up to help each other do things no one could do alone.`,
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to get tsa' },
            { status: 500 },
        );
    }
}
