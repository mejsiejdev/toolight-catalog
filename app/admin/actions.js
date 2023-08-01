"use server";

import { cookies } from "next/headers";

export const deleteCookie = async (name) =>
  cookies().set({ name: name, value: "", maxAge: 0 });
