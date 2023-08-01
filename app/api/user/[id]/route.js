import prisma from "@/dp";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
    select: {
      name: true,
      surName: true,
    },
  });
  return NextResponse.json(user);
}
