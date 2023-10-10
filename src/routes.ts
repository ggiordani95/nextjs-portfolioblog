import { Router } from 'express'
import { CreatePostController } from './controllers/CreatePostController'

const router = Router();

const createPost = new CreatePostController();


router.post('/posts', createPost.handle)

export { router }