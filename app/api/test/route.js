// import { NextResponse } from "next/server";
// import { data } from "./data.js";
// import prisma from "@/dp";
//
// export async function GET() {
//   const datas = data.map((dat) => {
//     const {
//       storeId,
//       variantId,
//       title,
//       category,
//       ean,
//       sku,
//       description,
//       attributes,
//       images,
//       euLabel,
//       priceNet,
//       priceGros,
//       vat,
//       quantity,
//       weight,
//       url
//     } = dat;
//     return {
//       storeId: storeId === "" ? 0 : parseInt(storeId),
//       variantId: variantId === "" ? 0 : parseInt(variantId),
//       title,
//       category,
//       ean: ean.toString(),
//       sku,
//       description,
//       attributes: attributes === "" ? [] : attributes,
//       images: images === "" ? [""] : images,
//       euLabel,
//       priceNet: priceNet.toString(), // TODO zrób funkcię eby dodawać zera nakkoniec jak ich nie ma
//       priceGros: priceGros.toString(), // TODO zrób funkcię eby dodawać zera nakkoniec jak ich nie ma
//       vat: vat === "" ? 0 : parseInt(vat),
//       quantity: quantity === "" ? 0 : parseInt(quantity),
//       weight: weight === "" ? 0 : parseInt(weight),
//       url
//     };
//   });
//   console.log(datas.length);
//   // await prisma.products.createMany({ datas });
//
//   datas.forEach(async (product) => {
//     await prisma.products.create({ data: product });
//   });
//   return NextResponse.json({ dupa: "dupa" });
//
//   // const getProducts = await prisma.product.findMany({
//   //   skip: 0,
//   //   take: 20,
//   // });
//   // return NextResponse.json(getProducts);
// }
