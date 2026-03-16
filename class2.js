class Laptop {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    getAge() {
         return new Date().getFullYear() - this.year;
    }
}
const myLaptop= new Laptop("Dell",  2020)
console.log(myLaptop.getAge())