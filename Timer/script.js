/*

Start the timer by clicking on the start link/button.
Once the user clicks start, the word start will change to stop. Then, the user can click on the stop button to make the timer stop.
Click on the gear icon to change the length (minutes and seconds) of the timer.
Once the timer finishes, the ring should change from green to red and an alert message is passed to the browser.

*/

const start = document.querySelector(".start");
const ring = document.querySelector(".ring");
const settings = document.querySelector(".time").getElementsByTagName("input");
const endingCircle = document.querySelector(".ring-ending-circle");
const settingsButton = document.querySelector(".settings");
const setminute = 0;
const setSecond = 1;

let isRunning = false;
let isSetting = false;
let timeValues = [0,0];
let tempValues = [0,0];

var callBack;

//let tempTimer = setInterval(callbackTimer,1000);


//const endingColor = document.querySelector(".ring-ending-circle").style.stroke;
//const endingColor = endingCircle.style.stroke;
//
const countDown = function()
{
    if(isRunning)
    {
        ring.style.stroke = "#900A0A";
    }
    else
    {
        ring.style.stroke = "#09A65A";
    }
}

const setSetting = function(systemActive)
{
    if(systemActive)
    {
        settings[setminute].disabled = true;
        settings[setSecond].disabled = true;
    }

}

const setStageText = function()
{
    start.textContent = isRunning ? "Stop" : " Start";
}

function callbackTimer()
{

    // have temporary array that takes in the math functions of the countdown and spits
    // the new value sout to the console.

    //console.log(finalSeconds);
    finalSeconds--;
    //console.log(Math.floor(finalSeconds / 60));

    let x = Math.floor(finalSeconds / 60);
    let remainder = finalSeconds % 60;
    //console.log(x);
    //console.log(remainder);
    if(finalSeconds >= 60)
    {

    }
    else
    {

    }
}

function StartTimer()
{
    callBack = setInterval(callbackTimer,1000);
}

function EndTime()
{
    /*
    1. Set ring to green, set all values back to initial value and text
    */
}

//
start.addEventListener("click",function()
{
    console.log("Start Button Click event");
    isRunning = !isRunning;
    setSetting(isRunning);
    countDown();
    setStageText();

    if(isRunning)
    {
      let temp =  ring.classList.replace(".ring",".ring-ending-circle");
      isSetting = true;
      finalSeconds = (settings[setminute].value * 60) + settings[setSecond].value;
      console.log(finalSeconds);
      StartTimer();
    }
    else    
    {
      let temp2 = ring.classList.replace(".ring-ending-circle",".ring");
      clearInterval(callBack);
    }

});

settingsButton.addEventListener("click",function()
{
    isSetting = !isSetting;
    if (isSetting)
    {
        settings[setminute].disabled = true;
        settings[setSecond].disabled = true;
        isRunning = false;
        countDown();
        setStageText();
    } 
    else 
    {
        settings[setminute].disabled = false;
        settings[setSecond].disabled = false;
        isRunning = false;
        countDown();
        setStageText();
    }
})