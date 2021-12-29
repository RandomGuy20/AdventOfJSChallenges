


let whiteKeys = document.querySelectorAll(".white-keys");
const blackKeys = document.querySelectorAll(".black-keys");

let mp3Files = [];

function PlayFile(index)
{
    mp3Files[index].play();
}

for (let i = 0; i < whiteKeys.length; i++) 
{
    whiteKeys[i].onclick = () =>
    {
        PlayFile(i+10);
    }    
}

for (let i = 0; i < blackKeys.length; i++) 
{
    blackKeys[i].onclick = () =>
    {
        PlayFile(i+1);
    }    
}

for (let i = 1; i < 24; i++)
{
    let temp = `key-${i}.mp3`;
    mp3Files[i] = new Audio('audio/' + temp);
}

