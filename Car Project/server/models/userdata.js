const { modelNames } = require("mongoose");
const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name:{
            type:String,
            require:true,
        },
        email:{
            type:String,
            require:true,
        },
        password:{
            type:String,
            require:true,
            minLength: 8,
        }
    }
)

module.exports = mongoose.model("User",userSchema)