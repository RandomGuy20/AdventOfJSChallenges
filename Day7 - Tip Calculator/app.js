


const tipChoice = $(".tip-percentages input:radio[name='tip']");

const percentage = [.05,.1,.15,.2];
const tipLabel = "tip";
let tipSelector;
let tipAmount ;
let totalPerPerson;
let numberOfPeople;
let billAmount;



// Find which tip amount
function GetChecked() 
{
    for (let index = 0; index < tipChoice.length; index++) 
    {
        if($(tipChoice[index]).prop('checked'))
        {
            //tipSelector = index;
            return index;
            break;
        }
    }
}

//Set All Feedback
$(document).ready(function()
{

    for (let index = 0; index < tipChoice.length; index++) 
        $(tipChoice[index]).prop('checked',false);

});

//Set the tip amount
function SetTipAmount()
{
    tipAmount = billAmount * percentage[tipSelector];
    $("#tip-amount").text(tipAmount);
    
}

//Total Amount per person
function TotalPerPerson()
{
    totalPerPerson = ((billAmount + tipAmount) / numberOfPeople).toFixed(2);
    console.log("Total per person : " + totalPerPerson);
    $("#total-per-person").text(totalPerPerson);
}


// Get Tip %
$(`input[name="${tipLabel}"]`).click(function (e) { 
    for (let index = 0; index < tipChoice.length; index++) 
        $(tipChoice[index]).prop('checked',false);

    $(this).prop('checked',true);

    tipSelector = GetChecked() ;


});

//Calculate TIp
$("#calculate").click(function (e) { 
    billAmount = parseInt($(".bill-amount input").val());
    numberOfPeople = parseInt($(".number-of-people input").val());
    SetTipAmount();
    TotalPerPerson();
 });
