import { NextResponse } from 'next/server';
import prisma from '@/dp';
import pagination from '@/app/middleware/pagination';

export async function GET(request) {
  try {
    const getCount = await prisma.products.count();
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page');
    const pag = await pagination(getCount, page)
      .then((res) => res)
      .catch((error) => error);
    const getProducts = await prisma.products.findMany({
      skip: pag.startIndex,
      take: pag.limit,
    });
    return NextResponse.json({
      products: getProducts,
      count: getCount,
      pages: pag.getPages,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}
