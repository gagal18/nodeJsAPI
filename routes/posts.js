const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

//GET BACK ALL POSTS FROM THE DATABASE
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        res.json(err)
    }
})
//SUBMIT NEW POST TO 
router.post('/', async (req, res) => {
    const userData = req.body
    const post = new Post({
        title: userData.title,
        description: userData.description
    })

    try {
        const savedPost = await post.save()
        res.json(savedPost)
    } catch (err) {
        res.json({ message: err })
    }
})
//SPECIFIC POST
router.get('/:postId', async (req, res) => {
    const id = req.params.postId

    try {
        const post = await Post.findById(id)
        res.json(post)
    } catch (error) {
        { message: error }
    }
})
//DELETE A POST
router.delete('/:postId', async (req, res) => {
    const id = req.params.postId

    try {
        const removedPost = await Post.deleteOne({ _id: id })
        res.json(removedPost)
    } catch (error) {
        { message: error }
    }
})
//UPDATE A POST
router.patch('/:postId', async (req, res) => {
    const id = req.params.postId

    try {
        const updatedPost = await Post.updateOne({ _id: id }, {
            $set: {
                title: req.body.title
            }
        })
        res.json(updatedPost)
    } catch (error) {
        { message: error }
    }
})
module.exports = router