// app/api/resume/project/route.ts
import { NextResponse } from 'next/server'

// GET /api/resume/project - get project information
export async function GET() {
  	try {
		// 这里通常会有数据库操作
		return NextResponse.json({ 
		message: `Efficient - E Process Service\n
			Provides several services for customers to apply, allows bank staff to review materials, 
			and connects with postal companies and financial escort companies to conduct fund settlement and product delivery\n

			As the person in charge of the system, perform daily operation and maintenance and iterative updates of the system.\n

			In the third phase of related project, independently completed the development 
			and testing of the "Judicial Assistance Window Appointment" function.\n

			In the fourth phase of related project, acted as the project manager and wrote the project definition design document. 
			Developed new functions including "Personal Loan Contract Delivery", 
			"Foreign Exchange Bill Delivery", and "Judicial Assistance Material Application", etc.`
		})
	} catch (error) {
		return NextResponse.json(
		{ error: 'Failed to get project' },
		{ status: 500 }
		)
	}
}