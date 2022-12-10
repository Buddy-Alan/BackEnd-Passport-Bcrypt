import mongoose from "mongoose";
const usersCollections = "users"
const usersSchema = new mongoose.Schema(

    {
        name: {
            type: String
        },
        userName: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        }
    }

)

export const userModels = mongoose.model(usersCollections, usersSchema)