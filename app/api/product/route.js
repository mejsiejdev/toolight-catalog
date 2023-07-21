import prisma from "@/dp";
import { NextResponse } from "next/server";

const empty = (string) => string === "undefined" || string === "";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page"));
  const limit = parseInt(searchParams.get("limit"));
  const id = searchParams.get("id");
  const variantId = searchParams.get("variantId");
  const sku = searchParams.get("sku");
  const ean = searchParams.get("ean");
  const category = searchParams.get("category");
  const name = searchParams.get("name");
  const products = await prisma.products.findMany({
    where: {
      title: {
        contains: empty(name) ? undefined : name,
      },
      storeId: { equals: empty(id) ? undefined : parseInt(id) },
      variantId: {
        contains: empty(variantId) ? undefined : parseInt(variantId),
      },
      sku: { contains: empty(sku) ? undefined : sku },
      ean: { contains: empty(ean) ? undefined : ean },
      category: empty(category) ? undefined : category,
    },
    take: limit,
    skip: page * limit !== 0 ? page * limit : undefined,
  });
  return NextResponse.json(products);
}
