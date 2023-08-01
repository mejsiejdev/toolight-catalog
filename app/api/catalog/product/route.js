import { NextResponse } from "next/server";
import prisma from "@/dp";

export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const product = await prisma.products.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(error);
  }
}
