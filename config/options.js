
import { chatModels } from "../mongo/models/chat.js"
import { userModels } from "../mongo/models/userModels.js"

const options = {

    mongo: {
        chat: chatModels,
        users: userModels
    },
    fileSystem: {
        chat: "chat.txt"
    }
}

export { options }