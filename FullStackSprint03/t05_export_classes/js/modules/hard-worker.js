class HardWorker {
    name;

    get age() {
        return  this._age
    }
    set age(value){
        if (value >= 1 && value < 100){
            this._age = value
        } 
    }

    get salary(){
        return  this._salary
    }
    set salary(value){
        if (value >= 100 && value < 100000){
            this._salary = value
        } 
    }

    toObject(){
        return {name: this.name, age: this._age, salary: this._salary}
    }
}
export {HardWorker}