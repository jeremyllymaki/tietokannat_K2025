setTimeout(doSomething,2000);

function doSomething(){
    console.log("Demonstrating the callbacks");
}
console.log("The application is started");

setTimeout(function(){
    console.log("demonstroi callback funktiota");
}, 2000)

console.log("ohjelma alkaa");

setTimeout(() => {
    console.log("demonstroidaan callback funktioita uudelleen");
}, 2000);

console.log("appi alkaa");

setTimeout(() => {
    console.log("demonstroidaan taas funktiota");
}, 2000);
