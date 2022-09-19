let homeNum=document.getElementById("home-num")
let guestNum=document.getElementById("guest-num")
let count = 0
function increByOne(){
    count++
    guestNum.textContent=count
}
function increByTwo(){
    count +=2
    guestNum.textContent=count
}
function increByThree(){
    count +=3
    guestNum.textContent=count
}
let homecount = 0
function homeincreByOne(){
 
    homecount++
    homeNum.textContent=homecount
}
function homeincreByTwo(){
    homecount +=2
    homeNum.textContent=homecount
}
function homeincreByThree(){
    homecount +=3
    homeNum.textContent=homecount
}
function newgame(){
    count=0
    homecount=0
    homeNum.textContent=homecount
    guestNum.textContent=count
}
function Period(){
 
}

//countdown timer
function gameStart(){
const startingMinutes= 12;
let time = startingMinutes*60;
let countDownEl=document.getElementById("countdown");
setInterval(updateCountdown,1000);

function updateCountdown(){
   var minutes = Math.floor(time / 60);
   var seconds = Math.floor(time % 60);
   seconds=seconds<10?"0"+ seconds :seconds;

   countDownEl.innerHTML= `${minutes}: ${seconds}`;
 time--;

}
}