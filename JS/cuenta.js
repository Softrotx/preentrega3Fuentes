// array de usuarios



/* valida si hay un usuario logueado activo */
ucuenta()

const titulo = document.getElementById('mainCuenta')
const endSesion = document.querySelector('#cerrarSesion')
let datosUsuario = document.getElementById('datosUser')
let gender = usuarioActivo.genero ?? "Sin definir"
let usrJob = usuarioActivo.trabajo ?? "Sin definir"
activarDatos()


/* body con datos del usuario */
function activarDatos(){

    iHtml("h1", titulo, `¡Bienvenido ${usuarioActivo.nombre}!`)
    iHtml("p", datosUsuario, `${usuarioActivo.nombre} ${usuarioActivo.apellido}`)
    iHtml("p", datosUsuario, `${usuarioActivo.correo}`)
    iHtml('p', datosUsuario, `Genero: ${gender}`)
    iHtml('p', datosUsuario, `Profesión: ${usrJob}`)
}


console.log(endSesion)

/* Boton para cerrar sesion . no permite ingresar nuevamente a la pagina de cuenta sin hacer login */
endSesion.onclick = () =>{cierre();}

