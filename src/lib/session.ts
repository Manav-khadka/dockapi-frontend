import { auth } from "@/auth" // or "next-auth" depending on your setup
import { redirect } from "next/navigation" // if you want to redirect unauthenticated users

export async function getServerSession(required = false) {
  const session = await auth()

  if (required && !session) {
    // Optional: Handle missing session (redirect or throw an error)
    redirect("/deploy") // or return null/error as you wish
  }

  return session
}
