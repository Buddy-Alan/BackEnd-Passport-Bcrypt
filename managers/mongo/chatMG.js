
class Chat {
    constructor(dataBase) {
        this.dataBase = dataBase;
    }


    agregarMensaje = async (newMsj) => {
        //Se realiza un if para filtrar productos ya cargados, con el fin de que no se repitan datos
        try {
            const mensaje = await this.dataBase.insertMany(newMsj)
            console.log(mensaje)
            console.log("Mensaje agregado con exito guardado")
        } catch (error) {
            console.log(error)
        }
    }



    obtenerMensajes = async () => {
        try {
            const result = await this.dataBase.find();
            return result
        } catch (error) {
            console.log(error)
        }
    }

}

export default Chat