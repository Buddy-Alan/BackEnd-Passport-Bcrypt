// const socketClient = io();
// let user
// Swal.fire({
//     title: "Hola usuario",
//     text: "Biuenvenido, ingresa tu usuario",
//     input: "text"
// }).then(respuesta => {
//     user = respuesta.value
// })
// const formEnvioMsjs = document.getElementById("title")

// formEnvioMsjs.addEventListener("keydown", (evn) => {
//     console.log(evn.key)
// })
// const contenedorDeMensajes = document.getElementById("messageContainer")

// socketClient.on("todosLosMensajes", datosRecibidos => {
//     let elementoMensajes = "";
//     datosRecibidos.forEach(element => {
//         elementoMensajes = elementoMensajes + `<p>${element.userName} : ${element.message}</p>`
//     });
//     contenedorDeMensajes.innerHTML = elementoMensajes;
// }

// )

// socketClient.on("newUser", (usuarioRecibido) => {
//     console.log("Nuevo usuario conectado")
// })