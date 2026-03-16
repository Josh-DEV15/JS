const myObject = {
    firstName : "Joshua",
    middleName : "Oluwaseun",
    lastName : "Godwin",
    fullName : function() {
        return this.firstName + " " + this.middleName + " " + this.lastName;
    }
}
console.log(myObject.fullName())