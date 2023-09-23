let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
let usuarioActivo = JSON.parse(sessionStorage.getItem('usuarioActivo')) || false

/* FUNCIONES DE LOGIN */
function validar(user, pass) {
    console.log(usuarios)
    for (const i of usuarios) {
        if (user === i.correo && pass === i.password) {
            const pos = usuarios.indexOf(i)
            console.log(pos)
            return [i, pos];
        }

    }
    return false;
}

function uActivo() {

    if (usuarioActivo) {
        validar(usuarioActivo[0].correo, usuarioActivo[0].pass)
        location.href = "./pages/cuenta.html"
    }

}
/* FIN DE FUNCIONES DE LOGIN */

/* INICIO DE FUNCIONES DE REGISTRO DE USUARIO */

/* valida si el correo esta duplicado en el registro */
function duplicado(user) {
    for (const i of usuarios) {
        if (user === i.correo) {
            console.log(user)
            negative(statusEmail)
            return false
        }
    }
    positive(statusEmail)
    return true
}



/* valida si la confirmacion del correo es igual al primer correo */
function confirmarMail(email1, email2) {
    if (email1 === email2) {
        console.log(email1 + " " + email2)
        positive(statusEmailConfirm)
        return true

    } else {
        negative(statusPassConfirm)
        return false
    }
}
/* valida si las 2 contraseñas son iguales */
function confirmarPass(pass1, pass2) {
    if (pass1 === pass2) {
        positive(statusPassConfirm)
        console.log(pass1 + " " + pass2)
        return true

    } else {
        negative(statusPassConfirm)
        console.log(pass1 + " " + pass2)
        return false
    }
}
/* funcion de seguridad de contraseña */
function esContrasenaSegura(password) {
    if (password.length < 8) {
        negative(statusPass)
        console.log(password.length)
        return false
    } else {
        positive(statusPass)
        console.log(password.length)
        return true
    }
}

/* agrega icono de confirmacion en la pagina de registro */
function positive(item) {
    item.setAttribute('src', '../medios/icons/positive.svg')
}

/* agrega icono negativo en la pagina de registro */
function negative(item) {
    item.setAttribute('src', '../medios/icons/negative.svg')
}

/* guarda el listado de usuarios en localStorage */
function guardarUsuario(usuario) {
    usuarios.push(usuario)
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    console.log(usuarios)
}


function ucuenta() {
    let usuarioActivo = JSON.parse(sessionStorage.getItem('usuarioActivo'))
    if (usuarioActivo) {
        validar(usuarioActivo[0].correo, usuarioActivo[0].pass)

    } else {
        location.href = "../index.html"
    }


}
function iHtml(etiqueta, padre, info) {
    const ietiqueta = document.createElement(`${etiqueta}`)
    ietiqueta.innerHTML = info
    padre.appendChild(ietiqueta);
}

function cierre() {
    sessionStorage.setItem('usuarioActivo', false)
    ucuenta()
}

/* imagen de avatar */
