function sayHello() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, world!");
        }, 2000
    );
    }
)
}
async function greet() {
    console.log("Waiting for greeting...");
    const message = await sayHello();
    console.log(message);
    console.log("Greeting complete!");
}
greet();