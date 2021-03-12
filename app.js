const secondHand = document.querySelector(".secondhand");
const minuteHand = document.querySelector(".minutehand");
const hourHand = document.querySelector(".hourhand");

function setDate(){
    const todayDate = new Date();

    const seconds = todayDate.getSeconds();
    const secondDegree = ( (seconds/60) * 360 ) + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    const minutes = todayDate.getMinutes();
    const minuteDegree = ((minutes/60) * 360 ) + 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

    const hours = todayDate.getHours();
    const hourDegree = ((hours/12) * 360 ) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`; 
}   
    
setInterval(setDate, 1000);