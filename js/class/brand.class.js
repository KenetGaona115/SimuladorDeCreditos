class Brand {
    constructor(id,name,models){
        this.id = id;
        this.name = name;
        this.models = models;
    }

    retunModels(){
        return this.models
    }
}

export {Brand}