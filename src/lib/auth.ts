import { PrismaClient } from '@prisma/client';
//import { PrismaAdapter } from '@auth/prisma-adapter';
import prismaF from "./prisma";

import{ NextAuthOptions, User, getServerSession } from 'next-auth';
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";

import CredentialsProvider from 'next-auth/providers/credentials'; 
import GoogleProvider from 'next-auth/providers/google';

const prisma = new PrismaClient();

export  const authconfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Enter email' },
        password: { label: 'Password', type: 'password', placeholder: 'Enter password' },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password ) {
          return null;
        }
        const dbUser = await prismaF.user.findFirst({
          where: { email: credentials.email },
        });

          //verify password here
          //we use bcrypt
         
          /*if (dbUser && dbUser.password && dbUser.createdAt) {
          const { password, createdAt, id, ...dbUserWithoutPassword} = dbUser;
          return dbUserWithoutPassword as unknown as User;
        }*/
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  //adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
};
