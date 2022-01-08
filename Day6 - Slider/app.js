

const range = document.getElementById("priceRange");
const amount = document.querySelector(".dollars");

range.oninput =function () 
{
    let cost = this.value / 100;
    let cents = this.value % 100;
    amount.textContent = cost;
}
