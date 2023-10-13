"use server";
import { cookies } from "next/headers";

export async function serverActionDelete() {
  cookies().delete("auth");
}
