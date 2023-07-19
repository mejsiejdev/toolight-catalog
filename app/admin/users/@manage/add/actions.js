"use server";

import prisma from "@/dp";
import { hash } from "bcrypt";
import { revalidatePath } from "next/cache";

export async function addUser(data) {
  hash(data.get("password"), 12).then(async function (hash) {
    await prisma.user.create({
      data: {
        name: data.get("name"),
        surName: data.get("surname"),
        email: data.get("email"),
        isAdmin: data.get("admin") === "on",
        password: hash,
      },
    });
    revalidatePath("/admin/users");
  });
}
