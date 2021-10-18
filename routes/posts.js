import { Router } from 'express'
import * as controllers from '../controllers/posts.js'
import restrict from '../helpers/restrict.js'

const router = Router()

router.get('/posts', controllers.getPosts)
router.get('/posts/:id', controllers.getPost)
router.post('/posts', controllers.createPost)
router.put('/posts/:id', controllers.updatePost)
router.delete('/posts/:id', controllers.deletePost)

export default router

//router.post, put, delete add ,restrict,: router.post('/posts', controllers.createPost)"