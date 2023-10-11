import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { verifyAuthorization } from "./verifyAuth";

const prisma = new PrismaClient({
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method === 'GET'){
        try {
            verifyAuthorization(req, res)
            const data = await prisma.post.findMany({
                include: { author: true }
            });

            return res.status(200).json(data);
            
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}