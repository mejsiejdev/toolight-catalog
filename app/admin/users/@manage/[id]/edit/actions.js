"use server";

import prisma from "@/dp";
import { revalidatePath } from "next/cache";

export async function editUser(data, id) {
  try {
    await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: data.get("name"),
        surName: data.get("surname"),
        email: data.get("email"),
      },
    });
    revalidatePath("/admin/users");
  } catch (error) {
    throw new Error("Wystąpił błąd w trakcie edytowania użytkownika.");
  }
}
