

const login = document.querySelector('#loginUsr')
const inputemail = document.querySelector('#inputEmail')
const inputpass = document.querySelector('#inputPass')


uActivo()

login.onsubmit = e => {
    e.preventDefault()
    const email = inputemail.value
    const pass = inputpass.value


    let usuario = validar(email, pass)

    if (usuario) {
        sessionStorage.setItem('usuarioActivo', JSON.stringify(usuario))
        location.href = "./pages/cuenta.html"

    }
    Swal.fire({
        heightAuto: false,
        icon: 'error',
        title: 'usuario o contraseña incorrecto',
        text: 'ingrese nuevamente',
    })
    pos = usuarios.indexOf(usuario)
    console.log(pos)

}


