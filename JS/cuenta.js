// array de usuarios



/* valida si hay un usuario logueado activo */
ucuenta()

const titulo = document.getElementById('mainCuenta')
const endSesion = document.querySelector('#cerrarSesion')
const datosUsuario = document.getElementById('datosUser')
const gender = usuarioActivo.genero ?? "Sin definir"
const usrJob = usuarioActivo.trabajo ?? "Sin definir"

/* body con datos del usuario */
iHtml("h1", titulo, `¡Bienvenido ${usuarioActivo.nombre}!`)
iHtml("p", datosUsuario, `${usuarioActivo.nombre} ${usuarioActivo.apellido}`)
iHtml("p", datosUsuario, `${usuarioActivo.correo}`)
iHtml('p', datosUsuario, `Genero: ${gender}`)
iHtml('p', datosUsuario, `Profesión: ${usrJob}`)

console.log(endSesion)

/* Boton para cerrar sesion . no permite ingresar nuevamente a la pagina de cuenta sin hacer login */
endSesion.onclick = () =>{cierre();}

