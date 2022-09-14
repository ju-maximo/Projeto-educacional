const { json } = require("express")
const userSchema = require("../model/userSchema")

const getAll = async(req, res) => {
    userSchema.find(function(err, users){
       if (err){
        res.status(500).send({message:err.message})
       } 
       res.status(200).send(users)
    })
}
const createUser = async(req, res)=> {
    try {
        const newUser = new userSchema(req.body)
        const savedUser = await newUser.save()
        res.status(200).json({
            message:"Seja bem-vido ao study",
            savedUser
        })
    } catch (error) {
        res.status(500),json({
            message: error.message
        })
    }
}

module.exports = {
    getAll , createUser
}