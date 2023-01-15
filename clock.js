const clock = document.querySelector("h2#clock_dtl");

function setClock(){
//console.log("hello");
const date = new Date();
//console.log(`${date.getHours()}: ${date.getMinutes()} : ${date.getSeconds()}`);
const hour = String(date.getHours()).padStart(2, "0"); 
const minute = String(date.getMinutes()).padStart(2, "0"); 
const second = String(date.getSeconds()).padStart(2, "0"); 
clock.innerText = `${hour} : ${minute} : ${second}`;
};
setClock();
setInterval(function() {setClock()}, 1000);
//setTimeout(() => { sayhello()}, 5000);