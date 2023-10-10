import { Request, Response} from 'express'
import { prismaClient }  from '../database/prismaClient'

export class CreatePostController {
    async handle(request: Request, response: Response){
        const { title, text, id } = request.body;

        const post = await prismaClient.post.create({
            data: {
                title,
                text,
                id,
                authorId: id
            }
        })

        return response.json(post);
    }
}