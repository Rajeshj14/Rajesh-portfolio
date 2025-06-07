import prisma from '../../../lib/prisma' // Adjust the import path as necessary
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('Request body:', body)

    // Verify prisma is initialized
    if (!prisma) {
      throw new Error('Prisma client not initialized')
    }

    // Check if the model exists (debugging)
    console.log('Available models:', Object.keys(prisma))

    const hireRequest = await prisma.hireRequest.create({
      data: {
        name: body.name,
        email: body.email,
        project: body.project,
        budget: body.budget
      }
    })

    return NextResponse.json(hireRequest, { status: 201 })
    
  } catch (error: any) {
    console.error('Full error:', error)
    return NextResponse.json(
      { 
        error: 'Database operation failed',
        details: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    )
  }
}