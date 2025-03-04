// app/api/resume/education/route.ts
import { NextResponse } from 'next/server'

// GET /api/resume/education - get education information
export async function GET() {
  	try {
		// 这里通常会有数据库操作
		return NextResponse.json({ 
		message: `The University of Hong Kong\n
			09/2024 - Present\n
			Master of Science in Computer Science (Financial Computing Stream)\n\n
			Sun Yat-sen University\n
			09/2018 - 06/2022 \n
			Bachelor of Engineering in Software Engineering`
		})
	} catch (error) {
		return NextResponse.json(
		{ error: 'Failed to get education' },
		{ status: 500 }
		)
	}
}