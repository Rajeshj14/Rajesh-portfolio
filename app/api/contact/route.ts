import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json()
//     const { name, email, subject, phone, company, message } = body

//     if (!name || !email || !subject || !phone || !company || !message) {
//       return NextResponse.json(
//         { error: 'All fields are required' },
//         { status: 400 }
//       )
//     }

//     const submission = await prisma.contactSubmission.create({
//       data: { name, email, subject, phone, company, message }
//     })

//     return NextResponse.json(
//       { message: 'Thank you for your submission!', submission },
//       { status: 201 }
//     )
//   } catch (error) {
//     console.error('Error creating contact submission:', error)
//     return NextResponse.json(
//       { error: 'Failed to process your submission' },
//       { status: 500 }
//     )
//   } finally {
//     await prisma.$disconnect()
//   }
// }


export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('Received submission:', body); // Add this line

    const { name, email, subject, phone, company, message } = body

    if (!name || !email || !subject || !phone || !company || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Test database connection first
    await prisma.$connect();
    console.log('Database connection successful'); // Add this line

    const submission = await prisma.contactSubmission.create({
      data: { name, email, subject, phone, company, message }
    })

    console.log('Submission created:', submission); // Add this line

    return NextResponse.json(
      { message: 'Thank you for your submission!', submission },
      {
        status: 201,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
        }
      }
    )
  } catch (error) {
    console.error('Detailed error:', error); // Enhanced error logging
    return NextResponse.json(
      { 
        error: 'Failed to process your submission', 
        details: typeof error === 'object' && error !== null && 'message' in error ? (error as { message: string }).message : String(error)
      },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}