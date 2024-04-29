import postModel from "../models/postModel.js"

export const getAllPost = async (req,res) =>{
    try {
        const posts = await postModel.findAll()
        res.json(posts)
<<<<<<< HEAD
    } catch (error) {
        res.json({message:error.message})
    }
}

export const getPost = async (req, res) =>{
    try {
        const {id} = req.params
        const post = await postModel.findByPk(id)
        res.json(post)
    } catch (error) {
        res.json({message:error.message})
    }

=======
    } catch (error) {
        res.json({message:error.message})
    }
}

export const getPost = async (req, res) =>{
    try {
        const {id} = req.params
        const post = await postModel.findByPk(id)
        res.json(post)
    
} catch (error) {
    res.json ({message:error.message})
}
    
>>>>>>> d4ff902858bcdcadb0bb3b144fa1cbdce8dc2439
}