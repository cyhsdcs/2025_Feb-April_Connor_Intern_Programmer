// app/api/users/route.ts
import { NextResponse } from 'next/server'

// GET /api/test - test api
export async function GET() {
  	try {
		// 这里通常会有数据库操作
		return NextResponse.json({ 
		message: 'test api'
		})
	} catch (error) {
		return NextResponse.json(
		{ error: 'Failed to test api' },
		{ status: 500 }
		)
	}
}