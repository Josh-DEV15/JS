class Phone {
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getAge (){
        return new Date().getFullYear() - this.year;
    }
}
const myPhone = new Phone("Apple", "Iphone 15", 2024)
console.log(myPhone)