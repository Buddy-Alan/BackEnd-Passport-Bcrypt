import { Chat } from "../../managers/files/chatFs.js"

class ChatDatosFs extends Chat {
    constructor(fileName) {
        //Ejecuta el constructor de la classe ContenedorProducts de Archivos
        super(fileName)
    }
}

export { ChatDatosFs }