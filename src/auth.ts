import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import jwt from "jsonwebtoken";
import { JWT } from "next-auth/jwt";

// Your RSA private key
const privateKey = `-----BEGIN PRIVATE KEY-----
${process.env.PRIVATE_KEY}
-----END PRIVATE KEY-----`;

// Extend the Session type to include accessToken and internalJwt (custom JWT)
declare module "next-auth" {
  interface Session {
    accessToken?: string;
    internalJwt?: string;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  // 1. Providers
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "repo read:user user:email workflow",
          prompt: "consent",
        },
      },
    }),
  ],

  // 2. Session settings
  session: {
    strategy: "jwt",
    maxAge: 60 * 60, // 1 hour
  },

  // 3. JWT encode & decode functions
  jwt: {
    encode: async ({ token, maxAge }) => {
      if (!token) {
        throw new Error("Token is undefined");
      }
  
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { exp, ...rest } = token; // explicitly remove exp to prevent conflict
      return jwt.sign(rest, privateKey, {
        algorithm: "RS256",
        expiresIn: maxAge, // reapply expiration via option
      });
    },
  
    decode: async ({ token }) => {
      if (!token) {
        throw new Error("Token is undefined");
      }
  
      return jwt.verify(token, privateKey, {
        algorithms: ["RS256"],
      }) as JWT;
    },
  },  

  // 4. Callbacks
  callbacks: {
    // JWT callback runs every time a JWT is issued/updated
    async jwt({ token, account, user }) {
      if (account && user) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.accessTokenExpires = Date.now() + (account.expires_in || 3600) * 1000;
        token.userId = user.id;
      }

      // If token is still valid, return it
      if (Date.now() < (Number(token.accessTokenExpires) || 0)) {
        return token;
      }

      // If expired (optional): Implement token refresh logic here
      return token;
    },

    // Session callback controls what gets sent to the client
    async session({ session, token }) {
      // Add GitHub accessToken
      session.user.id = token.userId as string;
      session.accessToken = token.accessToken as string;
      

      // Sign your own JWT with your private key and send to frontend
      const internalJwt = jwt.sign(
        {
          userId: token.userId,
          sub: token.userId,
          accessToken: token.accessToken,
          name: session.user.name,
          email: session.user.email,
          image: session.user.image,
        },
        privateKey,
        {
          algorithm: "RS256",
          expiresIn: "1h",
        }
      );

      // Expose the JWT to frontend
      session.internalJwt = internalJwt;

      return session;
    },
  },
});
