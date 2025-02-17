import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

// CORS middleware function
const cors = (req: Request) => {
  const allowedOrigins = ['http://localhost:3000']; // Define allowed origins
  const origin = req.headers.get('Origin') || '';

  // Check if the request's origin is in the allowed origins list
  if (allowedOrigins.includes(origin)) {
    return {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };
  }
  
  return undefined; // Return undefined if not allowed, as no CORS headers are needed
};

export async function GET(req: Request) {
  try {
    // Apply CORS headers
    const headers = cors(req);

    // Fetch course from the database
    const course = await prisma.course.findMany();
    
    // Return response with course data and CORS headers
    return NextResponse.json(course, { headers });
  } catch (error) {
    console.error('Error fetching course:', error);
    return NextResponse.json({ error: 'Failed to fetch course' }, { status: 500 });
  }
}

export async function OPTIONS(req: Request) {
  // Handle the OPTIONS method for preflight requests (browser sends this before a cross-origin request)
  const headers = cors(req);

  return new NextResponse(null, {
    status: 204,
    headers: {
      ...headers,
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    },
  });
}
