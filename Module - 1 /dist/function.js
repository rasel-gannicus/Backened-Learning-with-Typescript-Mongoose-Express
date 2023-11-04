"use strict";
//-- javascript function
function addSumm(number1, number2) {
    return number1 + number2;
}
//-- typscript function 
function addSum2(number1, number2) {
    return number1 + number2;
}
//-- typescript arrow function 
const addSum3 = (number1, number2) => number1 + number2;
// --- method (the function declared in an object is called  method)
const user = {
    name: 'rasel',
    profession: 'student',
    balance: 2500,
    addBalance(balance) {
        return this.balance + balance;
    }
};
const user2 = {
    name: 'rasel',
    profession: 'student',
    balance: 2500,
    addBalance(balance) {
        return `User's Balance is : ${this.balance + balance}`; //--- same previous code but with different type of return 
    }
};
const arr = [2, 4, 6, 8];
const squareArr = arr.map((element) => element * element);
