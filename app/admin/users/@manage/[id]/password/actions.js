"use server";

import { hash } from "bcrypt";
import prisma from "@/dp";
import { revalidatePath } from "next/cache";

export const changePassword = async (data, id) => {
  // Hash the password
  const hashed = await hash(data.get("password"), 12);
  try {
    await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        password: hashed,
      },
    });
    revalidatePath("/admin/users");
  } catch (error) {
    return error.name;
  }
};
