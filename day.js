const list = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


 let hour = new Date().getHours();
 let minute = new Date().getMinutes();
 let second = new Date().getSeconds()
 let Period = hour >= 12 ? "PM" : "AM";

 hour = hour % 12 || 12;
 console.log(list[new Date().getDay()])

  console.log(`${hour} ${Period} : ${minute} : ${second}`);
