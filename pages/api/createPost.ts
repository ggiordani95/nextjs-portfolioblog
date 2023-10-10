import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type TPost = {
    id: number,
    title: string,
    content: string,
    authorId: number,
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method === 'POST'){
        try {
            const post:TPost = req.body
            console.log(req.body, post)
            const data = await prisma.post.create({
                data:{
                    id: post.id,
                    title: post.title,
                    content: post.content,
                    authorId: post.authorId,
                }
            });
            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json('error')
        }
    }
}