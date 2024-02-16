import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";

export async function getCurentUser() {
  const session = await getServerSession(authConfig)
  return session
}