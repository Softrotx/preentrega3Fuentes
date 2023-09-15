let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
let usuarioActivo = JSON.parse(sessionStorage.getItem('usuarioActivo')) || false
const pos = 0

function validar(user, pass) {
    for (const i of usuarios) {
        if (user === i.correo && pass === i.password) {
            pos = usuarios.indexOf(i)
            return i;
        }

    }
    return false;
}


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

function confirmarMail(email1, email2) {
    if (email1 === email2) {
        console.log(email1 + " " + email2)
        positive(statusEmailConfirm)
        return true

    } else { negative(statusPassConfirm)
    return false
    }
}

function confirmarPass(pass1, pass2) {
    if (pass1 === pass2) {
        positive(statusPassConfirm)
        return true

    } else { negative(statusPassConfirm)
    return false
    }
}

function esContrasenaSegura(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&]).{8,}$/.test(password);
}

function positive(item){
    item.setAttribute('src', '../medios/icons/positive.svg') 
}
function negative (item){
    item.setAttribute('src', '../medios/icons/negative.svg') 
}

function guardarUsuario(usuario) {
    usuarios.push(usuario)
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    console.log(usuarios)
}

function uActivo() {
    
    if (usuarioActivo) {
        validar(usuarioActivo.correo, usuarioActivo.pass)
        location.href = "/pages/cuenta.html"
    }

}
function ucuenta() {
    
    if (usuarioActivo) {
        validar(usuarioActivo.correo, usuarioActivo.pass)

    } else {
        location.href = "/index.html"
    }


}
function iHtml(etiqueta, padre, info) {
    const ietiqueta = document.createElement(`${etiqueta}`)
    ietiqueta.innerHTML = info
    console.log(datosUsuario)
    padre.appendChild(ietiqueta);
}

function cierre() {
    sessionStorage.setItem('usuarioActivo', false)
    ucuenta()
}

