// // Write a program to calculate the total price of your phone purchase. 

// //You will keep purchasing phones (hint: loop!) until you run out of money 
// in your bank account. 

// You'll also buy accessories for each phone as long as 
// your purchase amount is below your mental spending threshold.

// // After you've calculated your purchase amount, add in the tax, then print 
// out the calculated purchase amount, properly formatted.

// // Finally, check the amount against your bank account balance to see if 
// you can afford it or not.

// // You should set up some constants for the "tax rate," "phone price," 
// "accessory price," and "spending threshold," as well as a variable for your 
// "bank account balance.""

// // You should define functions for calculating the tax and for formatting 
// the price with a "$" and rounding to two decimal places.

// // Bonus Challenge: Try to incorporate input into this program, 
// perhaps with the prompt(..) covered in "Input" earlier. You may prompt
//  the user for their bank account balance, for example. 


const TAX_RATE = 0.065;
const PHONE_PRICE = 499;
const ACCESORY_PRICE = 125.99;
const SPENDING_THRESHOLD = 2;
const ACCOUNT_BALANCE = 5200.63;
var purchaseAmount = 0;
var phonesBought = 0;
var accessoriesBought = 0;
var total = 0;

function buyPhone(purchaseAmount) {
    phonesBought += 1;
    return purchaseAmount + PHONE_PRICE;
}

function calculateTotal(purchaseAmount) {
    return purchaseAmount * (1 + TAX_RATE);
}

function shouldBuyAccessories(purchaseAmount) {
    if(purchaseAmount < SPENDING_THRESHOLD) {
        return true;
    }
    return false;
}

function buyAccessories(purchaseAmount) {
    accessoriesBought += 1;
    return purchaseAmount + ACCESORY_PRICE;
}

function format(price) {
    return "$" + price.toFixed(2);
}

while (purchaseAmount < ACCOUNT_BALANCE) {
    purchaseAmount = buyPhone(purchaseAmount);

    if(shouldBuyAccessories(purchaseAmount)) {
        purchaseAmount = buyAccessories(purchaseAmount);
    }

    total = calculateTotal(purchaseAmount);
    console.log(format(total));
}

if(total < ACCOUNT_BALANCE) {
    console.log("buying " + phonesBought + " phones and " + accessoriesBought + " accessories.")
} else {
    console.log("cannot afford " + phonesBought + " phones and " + accessoriesBought + " accessories.")
}