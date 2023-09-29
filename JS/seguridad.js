
usuarios = JSON.parse(localStorage.getItem('usuarios')) || []


const modificarDatos = document.querySelector('#modificarDatos')
const cambiarPass = document.querySelector('#cambiarPass')
const eliminarCuenta = document.querySelector('#eliminarCuenta')


console.log(usuarioActivo[0])

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
  nombre.value = `${usuarioActivo[0].nombre}`
  newForm.appendChild(nombre)

  const lastname = document.createElement('input')
  lastname.setAttribute('type', 'text')
  lastname.setAttribute('id', 'newLastName')
  lastname.value = `${usuarioActivo[0].apellido}`
  newForm.appendChild(lastname)

  const mail = document.createElement('input')
  mail.setAttribute('type', 'email')
  mail.setAttribute('id', 'newMail')
  mail.value = `${usuarioActivo[0].correo}`
  newForm.appendChild(mail)

  const genero = document.createElement('input')
  genero.setAttribute('type', 'text')
  genero.setAttribute('id', 'newGender')
  genero.value = `${usuarioActivo[0]?.genero || "Genero"}`
  newForm.appendChild(genero)

  const profes = document.createElement('input')
  profes.setAttribute('type', 'text')
  profes.setAttribute('id', 'newJob')
  profes.value = `${usuarioActivo[0]?.trabajo || "Profesion"}`
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
    Object.assign(usuarioActivo[0], nuevosDatos)
    Object.assign(usuarios[usuarioActivo[1]], usuarioActivo[0])
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    sessionStorage.setItem('usuarioActivo', JSON.stringify([usuarios[usuarioActivo[1]], usuarioActivo[1]]))


    datosUsuario.innerHTML = ""
    titulo.innerHTML = ""
    usuarioActivo = JSON.parse(sessionStorage.getItem('usuarioActivo')) || false
    activarDatos()
  }






}

cambiarPass.onclick = async e => {
  const { value: password } = await Swal.fire({
    title: 'Ingrese una nueva contraseña',
    input: 'password',
    inputPlaceholder: 'Escriba una nueva contraseña de al menos 8 caracteres',
    inputAttributes: {
      maxlength: 16,
      autocapitalize: 'off',
      autocorrect: 'off'
    }
  })
  const { value: password2 } = await Swal.fire({
    title: 'Repita la nueva contraseña',
    input: 'password',
    inputPlaceholder: 'Confirme la contraseña',
    inputAttributes: {
      maxlength: 16,
      autocapitalize: 'off',
      autocorrect: 'off'
    }
  })
  if (password.length < 8) {
    Swal.fire({
      heightAuto: false,
      icon: 'error',
      title: `Contraseña poco segura`,
      text: 'la contraseña debe contener al menos 8 caracteres',
    })

  } else if (!password === password2) {

    Swal.fire({
      heightAuto: false,
      icon: 'error',
      title: `Las contraseñas deben ser iguales`,
      text: 'Intentelo nuevamente',
    })
  } else {
    Swal.fire({
      heightAuto: false,
      icon: 'success',
      title: '¡Contraseña actualizada!',
      html: 'La sesion se cerrará en <strong></strong> segundos.',
      timer: 10000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('strong')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft() / 1000
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    })
    let nuevaPassword = { password: password }
    Object.assign(usuarios[usuarioActivo[1]], nuevaPassword)
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    sessionStorage.setItem('usuarioActivo', JSON.stringify([usuarios[usuarioActivo[1]], usuarioActivo[1]]))
    setTimeout(() => {

      cierre()

    }, 10000);



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
      Swal.fire({
        heightAuto: false,
        icon: 'warning',
        title: 'Se procede a eliminar la cuenta',
        html: 'la cuenta será eliminada en <strong></strong> segundos.',
        timer: 5000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('strong')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft() / 1000
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then(() => {
        usuarios.splice(usuarioActivo[1], 1)
        localStorage.setItem('usuarios', JSON.stringify(usuarios))
        
        cierre()
      })

    }
  })


}
