"use server";

import prisma from "@/dp";
import { revalidatePath } from "next/cache";

export async function deleteProduct(id) {
  try {
    await prisma.products.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/admin/products");
  } catch (error) {
    throw new Error("Wystąpił błąd w trakcie usuwania użytkownika.");
  }
}
