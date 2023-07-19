"use server";

import prisma from "@/dp";
import { revalidatePath } from "next/cache";

export async function deleteUser(id) {
  try {
    await prisma.user.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/admin/users");
  } catch (error) {
    throw new Error("Wystąpił błąd w trakcie usuwania użytkownika.");
  }
}
