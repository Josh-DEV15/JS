let greetings;
const hour =  new Date().getHours();

if (hour <18 ) {
    greetings = "Good Morning"
}
else {
    greetings = "Good evening"
}
console.log(greetings)