const Userdata = require("../models/userdata")
const mongoose = require("mongoose")

const getUsers = async(req,res)=>{
    const users = await Userdata.find({}).sort({createdAt: -1});
    res.status(200).json(users)
};

const createUser = async(req,res)=>{
    const {name,email,password}=req.body;
    try{
        const user = await Userdata.create({
            name,
            email,
            password
        });
       return res.status(200).json('User added');
    }catch(error){
        console.log("error while adding user" , error)
        return res.status(400).json({message:"SOmething went wrong",error});
    }
};

const getUser= async (req,res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "ID Not valid"});
    }
    const user = await Userdata.findById(id);
    if(!user){
        return res.status(404).json({error: " No such User"});
    }
    res.status(200).json(user);
};

const deleteUser = async (req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "ID Not Valid"});
    }
    const user = await Userdata.findOneAndDelete({_id: id});

    if(!user){
        return res.status(404).json({error: "No Such User"});
    }

    res.status(200).json('User Deleted Successfully');
};

const updateUser = async(req,res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "ID Not Valid"});
    }
    const user = await Userdata.findOneAndUpdate(
        {_id: id },
        {
            ...req.body,
        }
    );
    if(!user){
        return res.status(404).json({error: "No such User"});
    }

    res.status(200).json('User Updated Successfully');
};

module.exports = {
    getUser,
    createUser,
    getUsers,
    deleteUser,
    updateUser
}