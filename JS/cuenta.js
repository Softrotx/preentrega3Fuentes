/* array de usuarios en ./funciones.js */

/* valida si hay un usuario logueado activo */
ucuenta()



const titulo = document.getElementById('mainCuenta')
const endSesion = document.querySelector('#cerrarSesion')
let datosUsuario = document.getElementById('datosUser')
let gender = usuarioActivo[0]?.genero ?? "Sin definir"
let usrJob = usuarioActivo[0]?.trabajo ?? "Sin definir"
const fotoAvatar = document.querySelector('#ImgAvatar')
activarDatos() /* LINE : 15 */

if (usuarioActivo[0].avatar){
    fotoAvatar.setAttribute('src', `${usuarioActivo[0].avatar}`)
}else{
    fotoAvatar.setAttribute('src', `https://ui-avatars.com/api/?name=${usuarioActivo[0].nombre}+${usuarioActivo[0].apellido}&background=random&bold=true`)
}






/* body con datos del usuario */
function activarDatos() {

    iHtml("h1", titulo, `¡Bienvenido ${usuarioActivo[0].nombre}!`)
    iHtml("p", datosUsuario, `${usuarioActivo[0].nombre} ${usuarioActivo[0].apellido}`)
    iHtml("p", datosUsuario, `${usuarioActivo[0].correo}`)
    iHtml('p', datosUsuario, `Genero: ${gender}`)
    iHtml('p', datosUsuario, `Profesión: ${usrJob}`)
}


console.log(endSesion)

/* Boton para cerrar sesion . no permite ingresar nuevamente a la pagina de cuenta sin hacer login */
endSesion.onclick = () => { cierre(); }


