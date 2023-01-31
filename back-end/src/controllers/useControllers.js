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

// const updateUser = async(req, res) => {
//     const userId = req.params.id
//     const oldUser = mongoose[userId]
//     const newUser = req.body
//     mongoose[userId] = {...oldUser, ...newUser}
//     const savedUser = await mongoose[userId].save()
//     res.send(mongoose[userId],
//         savedUser)
//       };

const updateUser = function (req, res, next) {
    const aaa = userSchema  
    aaa.findOneAndUpdate({_name: req.params.name},
                req.body).then(function(){
          aaa.findOne({_name: req.params.name}).then(function(ip){
            res.send(ip);
          });
        }).catch(next);
     };    

// async function updateUser(payload, user) {
//     let userModel = mongoose.model(user, 'name');
//     userModel.findOneAndUpdate({name: name}, payload);
//     return (200)
// }

// const updateUser = async (req, res) => {
//     const id = req.params.id
//     const {name, email, password} = req.body
//     const usuario = {
//         name, email, password
//     }
//     try {
//         const usuarioAtualizado = userSchema.updateOne({_id: id}, usuario)
//         res.status(200).json()
//     } catch (err) {
//         res.status(500).json({error: error})

// }}

module.exports = {
    getAll , createUser , updateUser
}