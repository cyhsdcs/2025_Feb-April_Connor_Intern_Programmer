// app/api/gain/code/route.ts
import { NextResponse } from 'next/server';

// GET /api/gain/code - get code information
export async function GET() {
    try {
        return NextResponse.json({
            message: `- Self Presentation Project\n
                - Transcription Panel\n
                - Learn new frameworks\n
                - Learn right coding style\n
                - Learn how to do the version control\n
                - Learn team collaboration`,
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json(
            { error: 'Failed to get code'+message },
            { status: 500 },
        );
    }
}
