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
    const body = await request.json()
    console.log('Received data:', body); // Log incoming data
    
    const { name, email, subject, phone, company, message } = body

    // Validate required fields
    const requiredFields = ['name', 'email', 'subject', 'phone', 'company', 'message'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: 'Missing required fields', missingFields },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    const submission = await prisma.contactSubmission.create({
      data: { 
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        phone: phone.trim(),
        company: company.trim(),
        message: message.trim()
      }
    })

    return NextResponse.json(
      { message: 'Thank you for your submission!', submission },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Detailed error:', {
      message: error.message,
      stack: error.stack,
      name: error.name
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