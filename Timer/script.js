/*

Start the timer by clicking on the start link/button.
Once the user clicks start, the word start will change to stop. Then, the user can click on the stop button to make the timer stop.
Click on the gear icon to change the length (minutes and seconds) of the timer.
Once the timer finishes, the ring should change from green to red and an alert message is passed to the browser.

*/

const start = document.querySelector(".start");
const ring = document.querySelector(".ring");
const settings = document.querySelector(".time").getElementsByTagName("input");
const settingsButton = document.querySelector(".settings");
const setminute = 0;
const setSecond = 1;

let isRunning = false;
let isSetting = false;
let tempValues = [0,0];

var callBack;





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
    finalSeconds--;
    let x = Math.floor(finalSeconds / 60);
    let remainder = finalSeconds % 60;
    settings[setminute].value = remainder < 10 ? "0" + x : x;
    settings[setSecond].value = remainder < 10 ? "0" + remainder : remainder;


    if(x ===0 && remainder === 0)
    {
        EndTime();
        alert("The Timer is up!");
    }

}

function StartTimer()
{
    let temp =  ring.classList.replace(".ring",".ring-ending-circle");

    isSetting = true;
    finalSeconds = (parseInt(settings[setminute].value) * 60) + parseInt(settings[setSecond].value);
    tempValues[0] = settings[setminute].value;
    tempValues[1] = settings[setSecond].value;
    console.log(finalSeconds);
    callBack = setInterval(callbackTimer,1000);
}

function EndTime()
{
      let temp2 = ring.classList.replace(".ring-ending-circle",".ring");
      isRunning = false;
      setSetting(isRunning);
      setStageText();
      countDown();
      clearInterval(callBack);
      settings[setminute].value = tempValues[0];
      settings[setSecond].value = tempValues[1];
}



//
start.addEventListener("click",function()
{
    isRunning = !isRunning;
    setSetting(isRunning);
    countDown();
    setStageText();

    if(isRunning)
    {
      StartTimer();
    }
    else    
    {
      EndTime();
    }

});

settingsButton.addEventListener("click",function()
{
    if(!isRunning)
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
    }

})