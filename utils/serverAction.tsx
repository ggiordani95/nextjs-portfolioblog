"use server";
import { cookies } from "next/headers";
export async function serverAction() {
  const oneDay = 24 * 60 * 60 * 1000;
  cookies().set("auth", "accepted", { maxAge: oneDay });
}
