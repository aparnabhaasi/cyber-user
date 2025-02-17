import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

const cors = (req: Request) => {
  const allowedOrigins = ['http://localhost:3000'];
  const origin = req.headers.get('Origin') || '';

  if (allowedOrigins.includes(origin)) {
    return {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };
  }
  return {};
};

export async function GET(req: Request) {
    try {
      const headers = cors(req);
  
      // Fetch all slider data (or just one)
      const sliderData = await prisma.slider.findMany(); // Use findMany for array response
  
      if (!sliderData.length) {
        return NextResponse.json({ error: 'No slider data found' }, { status: 404 });
      }
  
      // Prefix image paths if needed
      const baseImagePath = '/uploads/';
      const fullData = sliderData.map((slider) => ({
        title: slider.title,
        imageUrl: `${baseImagePath}${slider.imageUrl}`,
      }));
  
      return NextResponse.json(fullData, { headers });
    } catch (error) {
      console.error('Error fetching slider data:', error);
      return NextResponse.json({ error: 'Failed to fetch slider data' }, { status: 500 });
    }
  }
  

export async function OPTIONS(req: Request) {
  const headers = cors(req);
  return new NextResponse(null, {
    status: 204,
    headers: {
      ...headers,
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    },
  });
}
