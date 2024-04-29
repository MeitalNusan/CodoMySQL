import express from "express" 

import { getAllPost, getPost } from "../controllers/postController.js"

const router = express.Router()

router.get("/",getAllPost)
router.get("/:id",getPost)


export default router