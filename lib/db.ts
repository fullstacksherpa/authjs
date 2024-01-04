import { PrismaClient } from "@prisma/client";
declare global {
    var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

//we could have done just db = new prismaClient but in Nextjs everytime we save the file, hot reloading will occur and new prismaClient will create. to tackel that, during development, we use globalThis.prisma which is not affected by hot - reloading since it check weather prisma is there or not before creating new one.