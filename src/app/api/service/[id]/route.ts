// /app/api/service/[id]/route.ts
import { prisma } from '@/lib/db';  // Assuming your Prisma client is configured properly
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json(
      { error: 'No service ID provided.' },
      { status: 400 }
    );
  }

  try {
    // Fetch the service by ID
    const service = await prisma.service.findUnique({
      where: { id },
    });

    if (!service) {
      return NextResponse.json(
        { error: 'service not found.' },
        { status: 404 }
      );
    }

    // Respond with the service details
    return NextResponse.json(service, { status: 200 });
  } catch (error) {
    console.error('Error fetching service:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
