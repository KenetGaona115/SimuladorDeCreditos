class Carro {

    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getMaxLoad() {
        if (this.year > 2020)
            return .75;
        else if (this.year <= 2020)
            return .45
    }
}

let carro;

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
const brandsArray = [
    "MERCEDES-BENZ",
    "BMW",
    "CHEVROLET",
    "TOYOTA",
    "KIA",
    "NISSAN",
    "VOLKSWAGEN",
    "MAZDA",
    "CHRYSLER",
    "HYUNDAI",
    "HONDA",
    "FORD"
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
            return [
                "Serie 1",
                "Serie 1 128ti",
                "Serie 2 Coupé",
                "Serie 2 Gran Coupé",
                "Serie 3",
                "Serie 3 Híbrido",
                "Serie 4 Coupé",
                "Serie 4 Gran Coupé",
                "Serie 4 Convertible",
                "Serie i4 ELÉCTRICO",
                "Serie 5 Sedán",
                "Serie 7 Sedán",
                "Serie 8 Coupé",
                "BMW X1",
                "BMW X3",
                "BMW X5",
                "BMW X7",
                "BMW Z4 Roadster",
                "BMW M135i xDrive"
            ]
        case "CHEVROLET":
            return [
                "Aveo",
                "Onix",
                "Cavalier",
                "Groove",
                "Tracker",
                "Captiva",
                "Blazer",
                "Traverse",
                "Tahoe",
                "Suburban",
                "S-10 Max",
                "Colorado",
                "Silverdado",
                "Cheyene",
                "Camaro",
                "Corvette"
            ]
        case "CHRYSLER":
            return [
                "PACIFICA",
                "CHRYSLER 300",
                "CHRYSLER 300-C",
                "CHRYSLER Airflow Graphite",
                "CHRYSLER Town & Country"
            ]
        case "FORD":
            return [
                "Territory",
                "Bronco",
                "Edge",
                "Explorer",
                "Expedition",
                "Mustang",
                "Ranger",
                "Maverick",
                "Lobo",
                "F-150",
                "Super Duty F-250",
                "Transit",
                "Raptor",

            ]
        case "HONDA":
            return [
                "CITY",
                "CIVIC",
                "INSIGHT",
                "ACCORD",
                "BR-V",
                "HR-V",
                "CR-V",
                "PILOT",
                "ODYSSEY"
            ]
        case "HYUNDAI":
            return [
                "GRAND I10",
                "ACCENT SD",
                "ACCENT HB⁠",
                "ELANTRA",
                "CRETA",
                "CRETA GRAND",
                "TUCSON",
                "SANTA FE",
                "PALISADE",
                "ELANTRA HEV",
                "TUCSON HEV"
            ]
        case "KIA":
            return [
                "Rio Sedán",
                "Rio Hatchback",
                "Forte Sedán",
                "Forte Hatchback",
                "Stinger",
                "Soul",
                "Seltos",
                "Niro",
                "Sorento"
            ]
        case "MAZDA":
            return [
                "MAZDA2 SEDÁN",
                "MAZDA2 HATCHBACK",
                "MAZDA3 SEDÁN",
                "MAZDA3 HATCHBACK",
                "MAZDA CX-3",
                "MAZDA CX-30",
                "MAZDA CX-5",
                "MAZDA CX-9",
                "MAZDA MX-5",
                "MAZDA MX-5 RF"
            ]
        case "MERCEDES-BENZ":
            return [
                "Clase A Sédan",
                "Clase C Sédan",
                "Clase E Sédan",
                "Clase S Sédan",
                "EQA SUV",
                "EQB SUV",
                "EQC SUV",
                "GLA SUV",
                "GLB SUV",
                "GLC SUV",
                "GLE SUV",
                "CLA Coupé",
                "CLS Coupé",
                "Clase E Coupé",
                "Sprinter"
            ]
        case "NISSAN":
            return [
                "Versa",
                "GT-R",
                "March",
                "Altima",
                "370Z",
                "V-Drive",
                "Sentra",
                "X-trail"
            ]
        case "TOYOTA":
            return [
                "Prius",
                "Corolla HV",
                "Camry HV",
                "Rav4 HV",
                "Siena"
            ]
        case "VOLKSWAGEN":
            return [
                "Virtus",
                "Jetta",
                "Saveiro",
                "T-Cross",
                "Nivus",
                "Taos",
                "Tiguan",
                "Teramont",
                "Cross Sport",
            ]
        default:
            console.error("No hay resultados")
            return []
    }
}

function getBrand() {
    html = "<option selected>Selecione la marca</option>"
    brandsArray.forEach(element => {
        html += `<option value="${element}">${element}</option>`
    });
    brandInput.innerHTML = html
}

function getYears() {
    html = "<option selected>Selecione el año</option>"
    yearArray.forEach(element => {
        html += `<option value="${element}">${element}</option>`
    });
    yearInput.innerHTML = html
}

function getModels() {
    if (brandInput.value) {
        let arrayModels = getModelsArray()
        html = "<option selected>Selecione el modelo</option>"
        arrayModels.forEach(element => {
            html += `<option value="${element}">${element}</option>`
        });
        modelInput.innerHTML = html
    }
}

function getTotalCarLoan() {
    carro = new Carro(brandInput.value, modelInput.value, yearInput.value);
    console.log(carro)
    labelTotal.innerHTML = `El maximo del prestamo es:$ ${(carro.getMaxLoad()* carLoan.value).toFixed(2)} `
}