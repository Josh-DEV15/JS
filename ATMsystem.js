 const accountBalance = 1000;

function checkBalance() {
    alert(`Your current balance is $${accountBalance}.`);
} 
function withdraw() {
    const amount = parseFloat(prompt("Enter the amount to withdraw:"));
    if (amount > 0 && amount <= accountBalance) {
        accountBalance -= amount;
        alert(`You have withdrawn $${amount}. Your new balance is $${accountBalance}.`);
    } else {
        alert("Invalid amount or insufficient funds.");
    }
}
function deposit() {
    const amount = parseFloat(prompt("Enter the amount to deposit:"));
    if (amount > 0) {
        accountBalance += amount;
        alert(`You have deposited $${amount}. Your new balance is $${accountBalance}.`);
    } else {
        alert("Invalid amount.");
    }   
}
function exit() {
    alert("Thank you for using our ATM. Goodbye!");
}
