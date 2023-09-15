
const modificarDatos = document.querySelector('#modificarDatos')
const cambiarPass = document.querySelector('#cambiarPass')
const eliminarCuenta = document.querySelector('#eliminarCuenta')



class EditDatos {
    constructor(newName, newLastName, newMail, newGender, newJob){
        this.newName = newName;
        this.newLastName = newLastName;
        this.newMail =newMail;
        this.newGender = newGender;
        this.newJob = newJob;
    }  
}

modificarDatos.onclick = () =>{
    datosUsuario.innerHTML = ""
    const nombre = document.createElement('input')
    nombre.setAttribute('type', 'text')
    nombre.setAttribute('id', 'newName')
    nombre.setAttribute('placeholder', `${usuarioActivo.nombre}`)
    datosUsuario.appendChild(nombre)

    const lastname = document.createElement('input')
    lastname.setAttribute('type', 'text')
    lastname.setAttribute('id', 'newLastName')
    lastname.setAttribute('placeholder', `${usuarioActivo.apellido}`)
    datosUsuario.appendChild(lastname)

    const mail = document.createElement('input')
    mail.setAttribute('type', 'text')
    mail.setAttribute('id', 'newMail')
    mail.setAttribute('placeholder', `${usuarioActivo.correo}`)
    mail.innerHTML = '<br>'
    datosUsuario.appendChild(mail)

    const newgender = document.createElement('input')
    newgender.setAttribute('type', 'text')
    newgender.setAttribute('id', 'newGender')
    newgender.setAttribute('placeholder', `${usuarioActivo?.genero || "Genero"}`)
    newgender.innerHTML = '<br>'
    datosUsuario.appendChild(newgender)

    const newjob = document.createElement('input')
    newjob.setAttribute('type', 'text')
    newjob.setAttribute('id', 'newJob')
    newjob.setAttribute('placeholder', `${usuarioActivo?.trabajo || "Profesion"}`)
    newjob.innerHTML = '<br>'
    datosUsuario.appendChild(newjob)


}
