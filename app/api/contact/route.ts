// import { PrismaClient } from '@prisma/client'
// import { NextRequest, NextResponse } from 'next/server'

// const prisma = new PrismaClient()

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

import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    console.log('Connecting to database...');
    
    const body = await request.json()
    console.log('Received data:', body);

    // Basic validation
    if (!body.name || !body.email) {
      console.log('Validation failed - missing fields');
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    console.log('Attempting to create record...');
    const submission = await prisma.contactSubmission.create({
      data: {
        name: body.name,
        email: body.email,
        subject: body.subject || '',
        phone: body.phone || '',
        company: body.company || '',
        message: body.message || ''
      }
    });

    console.log('Record created successfully:', submission);
    return NextResponse.json(
      { message: 'Thank you for your submission!', submission },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('FULL ERROR DETAILS:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
      meta: error.meta
    });
    
    return NextResponse.json(
      { 
        error: 'Failed to process your submission',

        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
export async function GET() {
  try {
    const count = await prisma.contactSubmission.count()
    return NextResponse.json({ success: true, count })
  } catch (error: any) {
    return NextResponse.json(
      { 
        success: false,
        error: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}