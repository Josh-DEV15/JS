const person = {
    firstName : "Emma",
    middleName : "Oluwaseun",
    lastName : "Stone",
    fullName : function() {
        return this.firstName + " " + this.middleName + " " +  this.lastName;
    }
};
console.log(person.fullName());