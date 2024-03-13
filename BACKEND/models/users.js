import {Schema, model} from "mongoose"

const userSchema = new Schema({
    name: {
        type:String,
        required: true,
    },
    prenom: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true
    },
    motDePasse:{
        type:String,
        required:true
    },
    confirmeMotDePasse:{
        type:String,
        required:true
    }
})

export default model("User", userSchema)