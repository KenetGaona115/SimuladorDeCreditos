import { Carro } from './class/car.class.js'
import { Brand } from './class/brand.class.js'


let carro;
let brandArray = []
const response = await fetch('../data/carData.json')
await response.json().then(data => {
    data.brands.forEach(element => {
        brandArray.push(new Brand(element.id, element.name, element.models))
    });
    console.log(brandArray)
})

const yearArray = [
    2000,
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
    2021,
    2022,
]

const modelInput = document.getElementById('modelInput')
const brandInput = document.getElementById('brandInput')
brandInput.addEventListener('click', getBrand())
brandInput.addEventListener('change', getModels)
const yearInput = document.getElementById('yearInput')
yearInput.addEventListener('click', getYears())
const carLoan = document.getElementById('carLoan')
const labelTotal = document.getElementById('totalLabel')
const totalButton = document.getElementById('totalButton')
totalButton.addEventListener('click', getTotalCarLoan)

function getModelsArray() {
    switch (brandInput.value) {
        case "BMW":
            return brandArray[0].models
        case "CHEVROLET":
            return brandArray[1].models
        case "CHRYSLER":
            return brandArray[2].models
        case "FORD":
            return brandArray[3].models
        case "HONDA":
            return brandArray[4].models
        case "HYUNDAI":
            return brandArray[5].models
        case "KIA":
            return brandArray[6].models
        case "MAZDA":
            return brandArray[7].models
        case "MERCEDES-BENZ":
            return brandArray[8].models
        case "NISSAN":
            return brandArray[9].models
        case "TOYOTA":
            return brandArray[10].models
        case "VOLKSWAGEN":
            return brandArray[11].models
        default:
            console.error("No hay resultados")
            return []
    }
}

function getBrand() {
    let html = "<option selected>Selecione la marca</option>"
    brandArray.forEach(element => {
        html += `<option value="${element.name}">${element.name}</option>`
    });
    brandInput.innerHTML = html
}

function getYears() {
    let html = "<option selected>Selecione el año</option>"
    yearArray.forEach(element => {
        html += `<option value="${element}">${element}</option>`
    });
    yearInput.innerHTML = html
}

function getModels() {
    if (brandInput.value) {
        let arrayModels = getModelsArray()
        let html = "<option selected>Selecione el modelo</option>"
        arrayModels.forEach(element => {
            html += `<option value="${element}">${element}</option>`
        });
        modelInput.innerHTML = html
    }
}

function getTotalCarLoan() {
    carro = new Carro(brandInput.value, modelInput.value, yearInput.value);
    console.log(carro)
    labelTotal.innerHTML = `El maximo del prestamo es:$ ${(carro.getMaxLoad() * carLoan.value).toFixed(2)}`
}