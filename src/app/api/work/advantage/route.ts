// app/api/work/advantage/route.ts
import { NextResponse } from 'next/server';

// GET /api/work/advantage/ - get work experience information
export async function GET() {
    try {
        // 这里通常会有数据库操作
        return NextResponse.json({
            message: `- Comfortable working environment!\n
            \u00A0\u00A0\u00A0\u00A0·Big workplace\n
            \u00A0\u00A0\u00A0\u00A0·Bed for naps\n
            - Independence and privacy\n
            \u00A0\u00A0\u00A0\u00A0·Tea time!\n
            - Friendly colleagues\n
            \u00A0\u00A0\u00A0\u00A0·Badminton team\n\n
            - Cheap canteen food, etc.`,
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to get work advantage' },
            { status: 500 },
        );
    }
}
