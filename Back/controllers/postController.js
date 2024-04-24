import postModel from "../models/postModel.js"

export const getAllPost = async (req, res) =>{
    try {
        const post = await postModel.findAll()
        res.json(post)
    } catch (error) {
        res.json({message:error.message})
    }
}