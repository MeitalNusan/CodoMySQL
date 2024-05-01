import express from "express" 


import { getAllPost, getPost, createPost, updatePost } from "../controllers/postController.js"

const router = express.Router()

router.get("/",getAllPost)
router.get("/:id",getPost)
router.post("/",createPost)
router.put("/:id",updatePost)


export default router