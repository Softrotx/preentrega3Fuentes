
//proceso para crear usuarios


class UserPass {
    constructor(nombre, apellido, correo, password) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.password = password;

    }

}
const registro = document.querySelector('#regUsr')
const regName = document.querySelector('#registroName')
const regLastName = document.querySelector('#registroLast')
const regMail = document.querySelector('#registroCorreo')
const statusEmail = document.querySelector('#statusEmail')
const regMailConfirm = document.getElementById('registroCorreoConfirm')
const statusEmailConfirm = document.querySelector('#imgEmailConfirm')
const regPass = document.getElementById('registroPass')
const statusPass = document.querySelector('#imgPass')
const regPassconfirm = document.getElementById('registroPassConfirm')
const statusPassConfirm = document.querySelector('#imgPassConfirm')




registro.onsubmit = e => {
    e.preventDefault()

    const name = regName.value
    const lastName = regLastName.value
    const email = regMail.value
    const emailConfirm = regMailConfirm.value
    console.log(emailConfirm)
    const pass = regPass.value
    const passConfirm = regPassconfirm.value


    // si hay algun campo en blanco el boton de registro no funciona
    if (!(regName?.value && regLastName?.value && regMail?.value && regMailConfirm?.value && regPassconfirm?.value)) {

        // Valida si el correo y la repeticion son correctas
    } else if (!confirmarMail(email, emailConfirm)) {
        alert("el email no corresponde a la confirmacion , favor corregir")

        // Valida si el correo no existe en la base de datos (localStorage)
    } else if (!duplicado(regMail.value)) {
        Swal.fire({
            heightAuto: false,
            icon: 'error',
            title: `el correo ${regMail.value} ya existe`,
            text: 'intente con otro correo o puede volver al login',
            footer: '<a href="/index.html">volver al login principal</a>'
        })
        // valida si la contraseña es segura
    } else if (!esContrasenaSegura(pass)) {
        negative(statusPass)
        Swal.fire({
            heightAuto: false,
            icon: 'error',
            title: `Contraseña poco segura`,
            text: 'la contraseña debe contener al menos 6 caracteres , un numero y uno de estos simbolos : $ @ $ ! % * ? & ',

        })
    } else if(!confirmarPass(pass, passConfirm)){
        positive(statusPass)
        Swal.fire({
            heightAuto: false,
            icon: 'error',
            title: `Contraseñas diferentes`,
            text: 'Las contraseñas no son iguales, favor corregir',

        })
        

    } else{
        positive(statusPass)
        const user = new UserPass(name, lastName, email, pass)
        guardarUsuario(user)
        Swal.fire(
            '¡Cuenta creada con exito!',
            'haz clic para continuar',
            'success'
          )



    }
    
    




}

