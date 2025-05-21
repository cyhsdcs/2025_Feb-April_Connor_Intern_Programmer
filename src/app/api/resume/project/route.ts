// app/api/resume/project/route.ts
import { NextResponse } from 'next/server';

// GET /api/resume/project - get project information
export async function GET() {
    try {
        // 这里通常会有数据库操作
        return NextResponse.json({
            message: `Efficient - E Process Service\n
			- Before: \n
			Go to the bank on weekdays\n
            Bring documents and copies\n
            Get in line\n
            - After: \n
            Apply anywhere\n
            Online review\n
            Deliver to the door\n`,
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json(
            { error: 'Failed to get project'+message },
            { status: 500 },
        );
    }
}
