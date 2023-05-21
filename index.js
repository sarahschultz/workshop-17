const coffeeMenu = require("./coffee_data.js")

// console.log(coffeeMenu);

function drinksArray (menuArray) {
    for (i = 0; i < menuArray.length; i++) {
        let beverage = menuArray[i]
    //now need to print the actual drink which is "name"
        console.log(beverage.name);
    }
}
// Prompt #2
drinksArray(coffeeMenu)

// Prompt #3
// drinksArray, price if <= 5
function drinkPrices (menuArray) {
    for (i=0; i < menuArray.length; i++) {
    let beverage = menuArray[i]
        if (beverage.price <= 5) {
            console.log(`Drinks five dollars and under: ${beverage.name} $${beverage.price}`);
        }
    }
}
drinkPrices(coffeeMenu);

//Prompt #4
function evenNum (menuArray) {
    for (i=0; i < menuArray.length; i++) {
    let beverage = menuArray[i]
        if (beverage.price % 2 === 0) {
            console.log(`Drinks with even numbered prices: ${beverage.name} $${beverage.price}`);
        }
    } //else not needed because we're only looking for the output of true and not caring about those that are false 
}
evenNum(coffeeMenu);

//Prompt #5
function oneOfEverything (menuArray) {
    let totalPrice = 0
    for (i=0; i < menuArray.length; i++) {
    let beverage = menuArray[i]
    totalPrice = beverage.price + totalPrice
}
console.log(`We'll take one of everything! It'll be: $ ${totalPrice}`)
}
oneOfEverything(coffeeMenu);

//Prompt #6
function seasonalYes (menuArray) {
    for (i=0; i < menuArray.length; i++) {
    let beverage = menuArray[i]
        if (beverage.seasonal === true) {
            console.log(beverage.name);
        }
    } //else not needed because we're only looking for the seasonal drinks, don't care otherwise
}
seasonalYes(coffeeMenu);

//Prompt #7
function seasonalBeans (menuArray) {
    for (i=0; i < menuArray.length; i++) {
    let beverage = menuArray[i]
        if (beverage.seasonal === true) {
            console.log(`${beverage.name} with imported beans`);
        }
    }
}
seasonalBeans(coffeeMenu);
