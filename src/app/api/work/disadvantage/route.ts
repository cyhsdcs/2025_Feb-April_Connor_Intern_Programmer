// app/api/work/disadvantage/route.ts
import { NextResponse } from 'next/server';

// GET /api/work/disadvantage/ - get work experience information
export async function GET() {
    try {
        // 这里通常会有数据库操作
        return NextResponse.json({
            message: `- Poor salary\n
            \u00A0\u00A0\u00A0\u00A0·This is a secret\n
            \u00A0\u00A0\u00A0\u00A0·Lower than the others\n
            \u00A0\u00A0\u00A0\u00A0·Grow slow\n
            \u00A0\u00A0\u00A0\u00A0·Poor bonus\n
            - Strange pressure\n
            \u00A0\u00A0\u00A0\u00A0·Always rushing\n
            - Repetitive tasks\n
            \u00A0\u00A0\u00A0\u00A0·Vue + Spring Boot forever!\n`,
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to get work disadvantage' },
            { status: 500 },
        );
    }
}
