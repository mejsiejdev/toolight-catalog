"use server";

import prisma from "@/dp";
import { hash } from "bcrypt";
import { revalidatePath } from "next/cache";

export async function addUser(data) {
  // Hash the password
  const hashed = await hash(data.get("password"), 12);
  try {
    await prisma.user.create({
      data: {
        name: data.get("name"),
        surName: data.get("surname"),
        email: data.get("email"),
        role: data.get("role"),
        password: hashed,
      },
    });
    revalidatePath("/admin/users");
  } catch (error) {
    return error.name;
  }
}
