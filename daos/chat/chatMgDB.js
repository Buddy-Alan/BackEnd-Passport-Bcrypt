import Chat from "../../managers/mongo/chatMG.js"

class ChatDatosMgDB extends Chat {
    constructor(dataBase) {
        //Ejecuta el constructor de la classe ContenedorProducts de Archivos
        super(dataBase)
    }
}

export { ChatDatosMgDB }