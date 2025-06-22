// app/api/sendEmail/route.ts
import { NextResponse } from 'next/server'
import emailjs from '@emailjs/browser' // Use the Node.js version!

export async function POST(request: Request) {
  try {
    const {
      name,
      email,
      password,
      phone,
      role,
      companyName,
      hireMe,
      additionalInfo
    } = await request.json()

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Initialize EmailJS (Node.js version)
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,

    })

    // Send email
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        name,
        email,
        password: password || 'Not provided',
        phone: phone || 'Not provided',
        role: role || 'Not provided',
        companyName: companyName || 'Not provided',
        hireMe: hireMe !== null ? (hireMe ? 'Yes' : 'No') : 'Not specified',
        additionalInfo: additionalInfo || 'Not provided'
      }
    )

    return NextResponse.json({ success: true, data: response })

  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}