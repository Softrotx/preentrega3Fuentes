
const modificarDatos = document.querySelector('#modificarDatos')
const cambiarPass = document.querySelector('#cambiarPass')
const eliminarCuenta = document.querySelector('#eliminarCuenta')

console.log(pos)

class EditDatos {
    constructor(newName, newLastName, newMail, newGender, newJob) {
        this.nombre = newName;
        this.apellido = newLastName;
        this.correo = newMail;
        this.genero = newGender;
        this.trabajo = newJob;
    }
}

modificarDatos.onclick = () => {
    // crea inputs para modificar datos


    datosUsuario.innerHTML = `<form id="modDatos">`
    const newForm = document.querySelector('#modDatos')

    const nombre = document.createElement('input')
    nombre.setAttribute('type', 'text')
    nombre.setAttribute('id', 'newName')
    nombre.value = `${usuarioActivo.nombre}`
    newForm.appendChild(nombre)

    const lastname = document.createElement('input')
    lastname.setAttribute('type', 'text')
    lastname.setAttribute('id', 'newLastName')
    lastname.value = `${usuarioActivo.apellido}`
    newForm.appendChild(lastname)

    const mail = document.createElement('input')
    mail.setAttribute('type', 'email')
    mail.setAttribute('id', 'newMail')
    mail.value = `${usuarioActivo.correo}`
    newForm.appendChild(mail)

    const genero = document.createElement('input')
    genero.setAttribute('type', 'text')
    genero.setAttribute('id', 'newGender')
    genero.value = `${usuarioActivo?.genero || "Genero"}`
    newForm.appendChild(genero)

    const profes = document.createElement('input')
    profes.setAttribute('type', 'text')
    profes.setAttribute('id', 'newJob')
    profes.value = `${usuarioActivo?.trabajo || "Profesion"}`
    newForm.appendChild(profes)

    const botonGuardar = document.createElement('button')
    botonGuardar.setAttribute('id', 'btnGuardar')
    botonGuardar.setAttribute('type', 'submit')
    botonGuardar.innerText = 'Guardar'
    newForm.appendChild(botonGuardar)

    const newInputName = document.querySelector('#newName')
    const newInputLastName = document.querySelector('#newLastName')
    const newInputMail = document.querySelector('#newMail')
    const newInputGender = document.getElementById('newGender')
    const newInputJob = document.getElementById('newJob')




    newForm.onsubmit = e => {
        e.preventDefault()

        const newName = newInputName.value
        console.log(newName)
        const newLastName = newInputLastName.value
        console.log(newLastName)
        const newMail = newInputMail.value
        console.log(newMail)
        const newGender = newInputGender.value
        console.log(newGender)
        const newJob = newInputJob.value
        console.log(newJob)



        let nuevosDatos = new EditDatos(newName, newLastName, newMail, newGender, newJob)
        console.log(nuevosDatos)
        console.log(usuarioActivo)
        console.log(usuarios)
        console.log(pos)
        Object.assign(usuarioActivo, nuevosDatos[0])
        console.log(usuarioActivo)
        console.log(usuarios)

        Object.assign(usuarios[pos], usuarioActivo[0])
        localStorage.setItem('usuarios', JSON.stringify(usuarios))
        sessionStorage.setItem('usuarioActivo', JSON.stringify(usuarioActivo))


        datosUsuario.innerHTML = ""
        titulo.innerHTML = ""
        usuarioActivo = JSON.parse(sessionStorage.getItem('usuarioActivo')) || false
        activarDatos()
    }






}

eliminarCuenta.onclick = e => {
    Swal.fire({
        title: '¿Está seguro de que quiere eliminar su cuenta?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Cancelar',
        denyButtonText: `Eliminar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Evitaste la eliminacion de la cuenta!')

        } else if (result.isDenied) {
          Swal.fire('se procederá a eliminar la cuenta')
          usuarios.splice(pos, 1)
          localStorage.setItem('usuarios', JSON.stringify(usuarios))
          cierre()
        }
      })


}