// import prisma from '../../../lib/prisma' // Adjust the import path as necessary
// import { NextResponse } from 'next/server'

// export async function POST(request: Request) {
//   try {
//     const body = await request.json()
//     console.log('Request body:', body)

//     // Verify prisma is initialized
//     if (!prisma) {
//       throw new Error('Prisma client not initialized')
//     }

//     // Check if the model exists (debugging)
//     console.log('Available models:', Object.keys(prisma))

//     const hireRequest = await prisma.hireRequest.create({
//       data: {
//         name: body.name,
//         email: body.email,
//         project: body.project,
//         budget: body.budget
//       }
//     })

//     return NextResponse.json(hireRequest, { status: 201 })
    
//   } catch (error: any) {
//     console.error('Full error:', error)
//     return NextResponse.json(
//       { 
//         error: 'Database operation failed',
//         details: error.message,
//         stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
//       },
//       { status: 500 }
//     )
//   }
// }

// Update your API route to handle Vercel deployment issues
// /app/api/hire-me/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Create a global instance to prevent multiple connections
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, project, budget } = body;

    // Validate required fields
    if (!name || !email || !project || !budget) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if database connection is available
    if (!process.env.DATABASE_URL) {
      console.error('DATABASE_URL is not defined');
      return NextResponse.json(
        { error: 'Database configuration error' },
        { status: 500 }
      );
    }

    // Test database connection
    await prisma.$connect();

    // Save to Prisma database
    const hireRequest = await prisma.hireRequest.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        project: project.trim(),
        budget: budget.trim(),
      },
    });

    return NextResponse.json(
      { 
        message: 'Request submitted successfully', 
        id: hireRequest.id,
        success: true
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Database error:', error);
    
    // More detailed error logging for debugging
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }

  return NextResponse.json(
    { 
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? String(error) : undefined
    },
    { status: 500 }
  );
  } finally {
    await prisma.$disconnect();
  }
}

// Add this to handle CORS issues if needed
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}