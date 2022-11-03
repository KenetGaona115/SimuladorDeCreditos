
const loan = document.getElementById('loan')
const months = document.getElementById('months')
const calculateButton = document.getElementById("totalButton");
const labelTotal = document.getElementById("totalLabel")
calculateButton.addEventListener("click", getTotal)
const solButton = document.getElementById('solButton')
solButton.addEventListener("click", displaySol)
solButton.style.visibility = 'hidden';
//Arreglo con los meses permitidos
const monthsArray = [6, 8, 12, 16, 32]
months.addEventListener("click", getMonths())

//Funcion para calcular costo total
function getTotal() {
    if (loan.value && months.value) {
        let total = parseFloat(loan.value)
        if (parseFloat(loan.value) <= 1000) {
            total += getIntereses(months.value, loan.value, 1)
        } else if (parseFloat(loan.value) <= 10000) {
            total += getIntereses(months.value, loan.value, 2)
        }
        else if (parseFloat(loan.value) > 100000) {
            total += getIntereses(months.value, loan.value, 3)
        }
        //debugger;
        total += getIVA()
        if (labelTotal.innerHTML.includes("El total a pagar del prestamo es")) {
            labelTotal.innerHTML = `El total a pagar del prestamo es:$ ${total}`
        }
        else {
            labelTotal.innerHTML = `El total a pagar del prestamo es:$ ${total}`
        }
    }
    solButton.style.visibility = 'visible';
}

//Funcion para calcular el IVA
function getIVA() {
    return loan.value * 0.16;
}

//Funcion para calcular los intereses
function getIntereses(months, loan, op) {
    if (op == 1)
        switch (months) {
            case 6:
                return loan * 0.10
                break;
            case 8:
                return loan * 0.16
                break;
            case 12:
                return loan * 0.18
                break;
            case 16:
                return loan * 0.21
                break;
            default:
                return loan * 0.25
        }
    else if (op == 2)
        switch (months) {
            case 6:
                return loan * 0.12
                break;
            case 8:
                return loan * 0.15
                break;
            case 12:
                return loan * 0.18
                break;
            case 16:
                return loan * 0.23
                break;
            default:
                return loan * 0.25
        }
    else
        switch (months) {
            case 6:
                return loan * 0.15
                break;
            case 8:
                return loan * 0.19
                break;
            case 12:
                return loan * 0.21
                break;
            case 16:
                return loan * 0.24
                break;
            default:
                return loan * 0.28
        }


}

function getMonths() {
   let html = "<option selected>Ingrese los meses</option>"
    monthsArray.forEach(element => {
        html += `<option value="${element}">${element}</option>`
    });
    months.innerHTML = html
}

function displaySol() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Solicitud enviada',
        showConfirmButton: false,
        timer: 1500
      })
}