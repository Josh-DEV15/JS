const vehicle = {
   color : "Red",
   brand : "Mercedes Benz",
   model : "C300",
   year : "2026",
    car : function() {
        return this.color + " " + this.brand + " " +  this.model + " " + this.year;
    }
};
console.log(vehicle.car());