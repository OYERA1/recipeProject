import prisma from "@/prisma/prisma"
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from "@auth/prisma-adapter"

export const authConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      // biome-ignore lint/style/noNonNullAssertion: <NextAuth Bug>
      clientId: process.env.GOOGLE_CLIENT_ID!,
      // biome-ignore lint/style/noNonNullAssertion: <NextAuth Bug>
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: "email", type: "text", placeholder: 'sei la qlqr coisa' },
        name: { label: "name", type: "text", placeholder: 'seu nome' },
        password: { label: "senha", type: "password", placeholder: 'sua senha' }
      },

      // biome-ignore lint/suspicious/noExplicitAny: <NextAuth Bug>
      async authorize(credentials, req): Promise<any> {
        console.log(credentials)
        const user = { name: "Luan", email: "teste@111.com", password: "sei la", }
        return user
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  secret: process.env.SECRET,
  debug: process.env.NODE_ENV === 'development',

}


