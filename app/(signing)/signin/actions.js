"use server";

import prisma from "@/dp";
import { compare } from "bcrypt";

export async function checkData(data) {
  // Try finding a user with this email
  const user = await prisma.user.findUnique({
    where: {
      email: data.get("email"),
    },
    select: {
      password: true,
      isAdmin: true,
    },
  });

  /**
   * If the user with this email isn't found,
   * return an appropriate message.
   */
  if (user === null) {
    return [
      false,
      "Nie znaleziono użytkownika z podanym emailem w bazie danych.",
    ];
  }

  // Check if the password from form matches the hash from DB
  const doPasswordsMatch = await compare(data.get("password"), user.password);

  if (!doPasswordsMatch) {
    return [false, "Nieprawidłowe hasło."];
  }

  return [true, user.isAdmin];
}
