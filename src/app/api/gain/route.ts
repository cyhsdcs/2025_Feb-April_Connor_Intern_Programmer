// app/api/gain/route.ts
import { NextResponse } from 'next/server';

// GET /api/gain - get gain information
export async function GET() {
    try {
        // 这里通常会有数据库操作
        return NextResponse.json({
            message: `Many`,
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json(
            { error: 'Failed to get gain'+message },
            { status: 500 },
        );
    }
}
