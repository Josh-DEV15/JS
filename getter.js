const user = {
    firstName: "Emmanuel",
    lastName: "Smith",
    language: "en",
    get lang() {
        return this.language.toUpperCase();
    }
}

console.log(user.lang)