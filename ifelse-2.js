let greetings;
const hour =  new Date().getHours();

if (hour <12 ) {
    greetings = "Good Morning"
}
else if (hour <17) {
    greetings = "Good Afternoon"
}
else {
    greetings = "Good evening"
}
console.log(greetings)