import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      authorization: {
        params: {
          scope: "repo read:user user:email workflow",
          prompt: "consent", // Forces the GitHub login screen to appear
        },
      }
    })
    ],
})