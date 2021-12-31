

let keyInputs = document.querySelectorAll("button");
let keys = [];
let storage = [];
let currentkey = "";

 
const Intialize = function()
{
    for (let i = 0; i < keyInputs.length; i++) 
    {
        keyInputs[i].classList.remove("jiggle");
    }

    currentkey = GetRandomLetter();
    keyInputs[keys.indexOf(currentkey)].classList.add("jiggle");
    storage.push(currentkey);
}

function GetRandomLetter()
{
    let state = true;
    if(storage.length < 53)
    {
        while (true) 
        {
            let random = Math.trunc(Math.random() * 52);
            if (!storage.includes(keys[random]))
            {
                storage.push(keys[random]);
                currentkey = keys[random];
                return currentkey;
            }
        }
    }
    else
    {
        Intialize();
        alert("You clicked every Key,good Job!");
    }

}

function SetKeyJiggle(index)
{
    if (index === currentkey) 
    {
        keyInputs[keys.indexOf(currentkey)].classList.remove("jiggle");
        keyInputs[keys.indexOf(GetRandomLetter())].classList.add("jiggle");
    }
}



for (let i = 0; i < keyInputs.length; i++) 
{
    keys[i] = keyInputs[i].getAttribute("data-key");
}

document.addEventListener('keydown', function(event) 
{
    console.log(event.key);
    SetKeyJiggle(event.key.toUpperCase());
}, true);

Intialize();




