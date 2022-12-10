

const socketClient = io();

// Swal.fire({
//     title: 'Login Form',
//     html: `<input type="text" id="email" class="swal2-input" placeholder="Ingrese Email">
//             <input type="text" id="nombre" class="swal2-input" placeholder="Ingrese Nombre">
//             <input type="text" id="apellido" class="swal2-input" placeholder="Ingrese Apellido">
//             <input type="text" id="edad" class="swal2-input" placeholder="Ingrese Edad">
//             <input type="text" id="alias" class="swal2-input" placeholder="Ingrese Alias">
//             <input type="text" id="avatar" class="swal2-input" placeholder="Ingrese Avatar URL">`,
//     confirmButtonText: 'Sign in',
//     focusConfirm: false,
//     preConfirm: () => {
//         const validarMail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
//         const email = Swal.getPopup().querySelector('#email').value
//         const nombre = Swal.getPopup().querySelector('#nombre').value
//         const apellido = Swal.getPopup().querySelector('#apellido').value
//         const edad = Swal.getPopup().querySelector('#edad').value
//         const alias = Swal.getPopup().querySelector('#alias').value
//         const avatar = Swal.getPopup().querySelector('#avatar').value
//         if (!validarMail.test(email) || !nombre || !apellido || !edad || !avatar || !alias) {
//             Swal.showValidationMessage(`Please enter login and password`)
//         }
//         return (user = { email: email, nombre: nombre, apellido: apellido, edad: edad, avatar: avatar, alias: alias })
//     }
// }).then((result) => {
//     Swal.fire(`
//     Email: ${result.value.email}
//     nombre: ${result.value.nombre}
//     apellido: ${result.value.apellido}
//     edad: ${result.value.edad}
//     alias: ${result.value.alias}
//     avatar: ${result.value.avatar}
//   `.trim())
//     console.log(user)
// })

//Schema normalizr
//schema para author
const authorEsquema = new normalizr.schema.Entity("authors", {}, { idAttribute: "email" })
// //Schema para mensajes
const schemaMessage = new normalizr.schema.Entity("messages", { author: authorEsquema })
// //Schema global
const schemaGlobal = new normalizr.schema.Entity("globalChat", { messages: [schemaMessage] }, { idAttribute: "id" })








//Variables Creadas para tomar datos del form y enviarlos
const formEnvioMsjs = document.getElementById("form")
const titleForm = document.getElementById("title")
const priceForm = document.getElementById("price")
const thumbnail = document.getElementById("thumbnail")

//Variables Creadas para tomar datos del chat y enviarlos
const contenedorDeMensajes = document.getElementById("messageContainer")
const actualizarProductos = document.getElementById("actualizarProductos")
const campo = document.getElementById("inputMensajes")

// const userSchema = new schema.Entity("user")

// const messageSchema = new schema.Entity("message", {
//     author: userSchema
// })

//Evento para enviar los datos del form
// formEnvioMsjs.addEventListener("keydown", (evn) => {
//     if (evn.key == "Enter") {
//         if (titleForm.value == "" || thumbnail.value == "" || priceForm.value == "") {
//             Swal.fire({
//                 title: "Porfavor completo los datos correcamente",
//                 showConfirmButton: false,
//                 timer: 1500
//             })
//         } else {
//             const nuevoProducto = {
//                 title: titleForm.value,
//                 price: priceForm.value,
//                 thumbnail: thumbnail.value
//             }
//             socketClient.emit("envioProducto", nuevoProducto)

//             titleForm.value = ""
//             priceForm.value = ""
//             thumbnail.value = ""
//         }
//     }
// })


//Evento para enviar los datos del chat
//El chat no funciona porque no toma los usuarios, no estan pasasdos desde el form  al chat 
//Hay que solicitar el usuario guardado en mgdb
campo.addEventListener("keydown", (evn) => {
    if (evn.key == "Enter") {
        console.log(campo.value)
        if (campo.value != "") {
            socketClient.on("usuario", usuario => {
                socketClient.emit("envioMensajesFront", {
                    author: usuario,
                    message: campo.value
                })
            })
        }
        campo.value = ""
    }
})


//Renderiza todo el chat con websocket
socketClient.on("todosLosMensajes", datosRecibidos => {
    let elementoMensajes = "";
    //Se desnormaliza la data

    const datosNormal = normalizr.denormalize(datosRecibidos.result, schemaGlobal, datosRecibidos.entities)

    datosNormal.messages.forEach(element => {
        elementoMensajes = elementoMensajes + `<p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7;">${element.author.email} : ${element.message}</p>`
    });
    contenedorDeMensajes.innerHTML = elementoMensajes;
    pesoComprimido = JSON.stringify(datosRecibidos).length
    pesoOriginal = JSON.stringify(datosNormal).length
    compresion = ((pesoOriginal - pesoComprimido) * 100 / pesoOriginal)
    console.log(`El porcentaje comprimido es: ${compresion.toFixed(2)}%`)
}

)


//Renderiza los productos con websocket
// socketClient.on("todosLosProductos", productosRecibidos => {
//     console.log(productosRecibidos)
//     let renderizadoDeProductos = "";
//     productosRecibidos.forEach(productos => {
//         renderizadoDeProductos = renderizadoDeProductos + `
//     <tr>
//         <th scope="row">${productos.id}</th>
//         <td>${productos.title}</td>
//         <td>${productos.price}</td>
//         <td>
//         <img src=${productos.thumbnail} alt="img" width="25">
//         </td>
//     </tr>
//     `
//         actualizarProductos.innerHTML = renderizadoDeProductos
//     })
// })