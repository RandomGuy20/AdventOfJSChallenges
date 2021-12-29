/*
View the plates on the left side of the screen and 
add them to your cart on the right side.

When there are no plates within your cart, 
you should see a message that says, "Your cart is empty."

When a plate is added to your cart, t
he Subtotal and Totals will automatically update.

When products are in your cart, you should be able to increase and decrease 
the quantity. A user should not be able to mark the quantity as a negative number.
If the quantity goes down to 0, 
the user will have the option to delete or remove 
the product from their cart entirely.

Tax is based on the state of Tennessee sales tax: 0.0975

*/


const menuItems = [
    
    {
        name: 'French Fries with Ketchup',
        price: 223,
        image: 'plate__french-fries.png',
        alt: 'French Fries',
        count: 0
    },
    {
        name: 'Salmon and Vegetables',
        price: 512,
        image: 'plate__salmon-vegetables.png',
        alt: 'Salmon and Vegetables',
        count: 0
    },
    {
        name: 'Spaghetti Meat Sauce',
        price: 782,
        image: 'plate__spaghetti-meat-sauce.png',
        alt: 'Spaghetti with Meat Sauce',
        count: 0
    },
    {
        name: 'Bacon, Eggs, and Toast',
        price: 599,
        image: 'plate__bacon-eggs.png',
        alt: 'Bacon, Eggs, and Toast',
        count: 0
    },
    {
        name: 'Chicken Salad with Parmesan',
        price: 698,
        image: 'plate__chicken-salad.png',
        alt: 'Chicken Salad with Parmesan',
        count: 0
    },
    {
        name: 'Fish Sticks and Fries',
        price: 634,
        image: 'plate__fish-sticks-fries.png',
        alt: 'Fish Sticks and Fries',
        count: 0
    }
]


const squareList = document.querySelector(".menu");
const squareLi  = document.querySelector(".menu li");

squareList.onclick = function(e)
{

}


let items = document.querySelectorAll(".menu li"),
tab = [], index;

// add values to the array
for(var i = 0; i < items.length; i++){
tab.push(items[i].innerHTML);
}

// get selected element index
for(var i = 0; i < items.length; i++)
{
items[i].onclick = function(){

index = tab.indexOf(this.innerHTML);
console.log(this.innerHTML + " Index = " + index);

};
}







