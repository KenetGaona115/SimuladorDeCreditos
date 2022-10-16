
export class Carro {

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

export {Carro}