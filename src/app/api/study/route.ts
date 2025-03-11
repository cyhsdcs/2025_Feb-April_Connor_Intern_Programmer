// app/api/study/route.ts
import { NextResponse } from 'next/server';

// GET /api/study - get study information
export async function GET() {
    try {
        // 这里通常会有数据库操作
        return NextResponse.json({
            message: `Many`,
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to get study' },
            { status: 500 },
        );
    }
}
