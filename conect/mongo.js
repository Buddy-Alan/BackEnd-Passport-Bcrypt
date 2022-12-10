import mongoose from "mongoose";



export const conectMongo = (urlAIngresar) => {
    mongoose.connect(urlAIngresar, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
        error => {
            if (error) throw new Error(`Conexion fallida ${error}`);
            console.log("¡Conexion a Mongo Exitosa!")
        })
    console.log("base de datos conectada")


}



// mongoose.connect(usuariosDB, {
//     useNewUrlParser: true,
//     useUnifieldTopology: true
// }, (error) => {
//     if (error) return console.log(`Hubo un error  conectando a mongo ATLAS ${error}`); console.log("Conexion a mongo atlas exitosa")
// })