import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.author.findMany({
    include:{
        posts: true
    }
}) 