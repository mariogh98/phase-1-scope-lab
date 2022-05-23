// Write your solution in this file!
var customerName = "bob"


function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}





function setBestCustomer() {
     bestCustomer = "not bob"
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = "Phillip"  /*<=====Value of the variable should not be able to be reassigned when decalred with (const)*/

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "Gordon"
}