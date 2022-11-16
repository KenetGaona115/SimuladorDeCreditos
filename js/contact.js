const emailIn = document.getElementById("emailIn")
const comenIn = document.getElementById("comenIn")

const solButton = document.getElementById('solButton')
solButton.addEventListener("click", displaySol)

const whatButton = document.getElementById('whatButton')
whatButton.addEventListener("click", displaySolWhats)

function displaySol() {
    if (emailIn.value && comenIn.value) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Solicitud correcta: ' + emailIn.value,
            showConfirmButton: false,
            timer: 1800
        })
    } else {
        displayError()
    }
    emailIn.value = ''
    comenIn.value = ''
}

function displaySolWhats() {

    Swal.fire({
        title: 'Ingresa tu numero de telefono: ',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
    }).then((result) => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Solicitud completa',
            showConfirmButton: false,
            timer: 1800
        })
    })

}

function displayError() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se han llenado los campos correctamente'
    })
}