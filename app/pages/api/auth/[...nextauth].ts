import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// we will define `options` up next
const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

// const emailHost = 'smtp.sendgrid.net'
// const emailUsername = 'apikey' // <- don't replace "apikey" it's the actual username
// const emailPassword = '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'


const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    adapter: Adapters.Prisma.Adapter({ prisma }),
    secret: process.env.SESSION_SECRET,
};