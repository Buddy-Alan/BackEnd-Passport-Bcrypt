import mongoose from "mongoose";
const chatCollections = "chat"
const chatSchema = new mongoose.Schema(

    {
        author: {
            id: {
                type: String,
                require: true,
            },
            nombre: {
                type: String,
                require: true
            },
            apellido: {
                type: String,
                require: true
            },
            edad: {
                type: Number,
                require: true
            },
            alias: {
                type: String,
                require: true
            },
            avatar: {
                type: String,
                require: true
            },
        },
        message: {
            type: String
        }
    }

)

export const chatModels = mongoose.model(chatCollections, chatSchema)