"use server";

import prisma from "@/dp";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { cookies } from "next/headers";

export async function checkData(data) {
  // Try finding a user with this email
  const user = await prisma.user.findUnique({
    where: {
      email: data.get("email"),
    },
    select: {
      id: true,
      password: true,
      role: true,
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

  // If the passwords match, create and save a JWT token.
  const token = sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  cookies().set({ name: "token", value: token, httpOnly: true, secure: true });

  return [true, user.role === "Administrator"];
}
