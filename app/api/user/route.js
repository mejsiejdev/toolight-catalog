import prisma from "@/dp";
import { NextResponse } from "next/server";

const empty = (string) => string === "undefined" || string === "";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page"));
  const limit = parseInt(searchParams.get("limit"));
  const name = searchParams.get("name");
  const surname = searchParams.get("surname");
  const email = searchParams.get("email");
  const role = searchParams.get("role");
  const users = await prisma.user.findMany({
    where: {
      name: {
        contains: empty(name) ? undefined : name,
      },
      surName: { contains: empty(surname) ? undefined : surname },
      email: { contains: empty(email) ? undefined : email },
      role: empty(role) ? undefined : role,
    },
    take: limit,
    skip: page * limit !== 0 ? page * limit : undefined,
  });
  return NextResponse.json(users);
}
