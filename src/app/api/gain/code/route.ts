// app/api/gain/code/route.ts
import { NextResponse } from 'next/server';

// GET /api/gain/code - get code information
export async function GET() {
    try {
        return NextResponse.json({
            message: `- Self Presentation Project\n
                - Transcription Panel`,
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to get code' },
            { status: 500 },
        );
    }
}
