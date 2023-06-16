import { NextResponse } from 'next/server';
import { data as datas } from './data.js';
import { prisma } from '@/dp';

export async function GET() {
  const data = datas.map((dat) => {
    const {
      storeId,
      variantId,
      title,
      category,
      ean,
      sku,
      description,
      attributes,
      images,
      euLabel,
      priceNet,
      priceGros,
      vat,
      quantity,
      weight,
      url,
    } = dat;
    return {
      storeId: storeId === '' ? 0 : parseInt(storeId),
      variantId: variantId === '' ? 0 : parseInt(variantId),
      title,
      category,
      ean: ean.toString(),
      sku,
      description,
      attributes: attributes === '' ? [] : attributes,
      images: images === '' ? [''] : images,
      euLabel,
      priceNet: priceNet.toString(), // TODO zrób funkcię eby dodawać zera nakkoniec jak ich nie ma
      priceGros: priceGros.toString(), // TODO zrób funkcię eby dodawać zera nakkoniec jak ich nie ma
      vat: vat === '' ? 0 : parseInt(vat),
      quantity: quantity === '' ? 0 : parseInt(quantity),
      weight: weight === '' ? 0 : parseInt(weight),
      url,
    };
  });
  console.log(data.length);
  await prisma.products.createMany({ data });

  // products.forEach(async (product) => {
  //   await prisma.product.create({ data: product });
  // });
  return NextResponse.json({
    message1: data.length,
    message2: data.length * 2,
    message3: data.length * 3,
    message4: data.length * 4,
    message5: data.length * 5,
    message6: data.length * 6,
    message7: data.length * 7,
    message8: data.length * 8,
    message9: data.length * 9,
    message10: data.length * 10,
    message11: data.length * 11,
    message12: data.length * 12,
    message13: data.length * 13,
    message14: data.length * 14,
    message15: data.length * 15,
    message16: data.length * 16,
  });

  // const getProducts = await prisma.product.findMany({
  //   skip: 0,
  //   take: 20,
  // });
  // return NextResponse.json(getProducts);
}
