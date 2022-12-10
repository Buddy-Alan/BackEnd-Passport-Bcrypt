let contenedorDaoChat;

import { options } from "../config/options.js"
let dataBaseType = "archivos"

switch (dataBaseType) {
    case "mongo":
        const { ChatDatosMgDB } = await import("../daos/chat/chatMgDB.js")
        contenedorDaoChat = new ChatDatosMgDB(options.mongo.chat)
        break;
    case "archivos":
        const { ChatDatosFs } = await import("../daos/chat/chatFS.js")
        contenedorDaoChat = new ChatDatosFs(options.fileSystem.chat)
        break;
}

export { contenedorDaoChat }