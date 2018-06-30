import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
const router = new Router();

// Get all Posts

router.route('/incredients').get(PostController.getIncredients);

router.route('/search').get(PostController.search);


// Get one post by cuid

// Add a new Post

// Delete a post by cuid

export default router;
