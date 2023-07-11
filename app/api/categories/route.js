import { NextResponse } from 'next/server';
import prisma from '@/dp';

export async function GET() {
  try {
    const getProducts = await prisma.products.findMany();
    const uniqueCategories = getProducts.reduce((allProduct, product) => {
      if (allProduct.indexOf(product.category) !== -1) return allProduct;
      return [...allProduct, product.category];
    }, []);
    console.log(uniqueCategories);
    return NextResponse.json({
      categories: uniqueCategories,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}
