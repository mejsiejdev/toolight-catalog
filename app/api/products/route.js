import { NextResponse } from 'next/server';
import { prisma } from '@/dp';

export async function GET() {
  const getProducts = await prisma.products.findMany({
    take: 1,
  });
  return NextResponse.json(getProducts);
}
