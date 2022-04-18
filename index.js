// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName(){
     customerName = customerName.toUpperCase();
}// now it can use global variable
function setBestCustomer(){
   bestCustomer = 'not bob';
}// declaring global variable from İNSİDE a function-undefined

function overwriteBestCustomer(){
  bestCustomer = "maybe bob"
}
const leastFavoriteCustomer = "vera"
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "reha"
}