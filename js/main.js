const loan = document.getElementById('loan')
const months = document.getElementById('months')
const calculateButton = document.getElementById("totalButton");
const labelTotal = document.getElementById("totalLabel")
calculateButton.addEventListener("click", getTotal)

//Funcion para calcular costo toal
function getTotal() {
    let total = 0
    if (parseFloat(loan.value) <= 1000) {
        total = getIntereses(months.value, loan.value, 1)
    } else if (parseFloat(loan.value) <= 10000) {
        total = getIntereses(months.value, loan.value, 2)
    }
    else if (parseFloat(loan.value) > 100000) {
        total = getIntereses(months.value, loan.value, 3)
    }
    debugger;
    total += getIVA()
    labelTotal.innerText = `El total del prestamo es:$ ${total}`
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