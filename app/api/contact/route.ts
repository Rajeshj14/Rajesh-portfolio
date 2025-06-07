import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, phone, company, message } = body

    if (!name || !email || !subject || !phone || !company || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const submission = await prisma.contactSubmission.create({
      data: { name, email, subject, phone, company, message }
    })

    return NextResponse.json(
      { message: 'Thank you for your submission!', submission },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating contact submission:', error)
    return NextResponse.json(
      { error: 'Failed to process your submission' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
