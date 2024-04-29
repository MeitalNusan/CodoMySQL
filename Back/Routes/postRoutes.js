import express from "express" 


import { getAllPost, getPost, createPost } from "../controllers/postController.js"

const router = express.Router()

router.get("/",getAllPost)
router.get("/:id",getPost)
router.post("/",createPost)


export default router