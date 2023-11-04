
//-- javascript function
function addSumm(number1, number2){
    return number1 + number2 ;
}


//-- typscript function 
function addSum2(number1 : number, number2 : number):number {
    return number1 + number2 
}

//-- typescript arrow function 
const addSum3 = (number1 : number, number2 : number) : number => number1 + number2 ; 

// --- method (the function declared in an object is called  method)
const user = {
    name : 'rasel',
    profession : 'student',
    balance : 2500,
    addBalance(balance : number):number{
        return this.balance + balance ;
    }
}

const user2 = {
    name : 'rasel',
    profession : 'student',
    balance : 2500, 
    addBalance(balance : number):string{
        return `User's Balance is : ${this.balance + balance}`; //--- same previous code but with different type of return 
    }
}

const arr : number[] = [2, 4, 6, 8];

const squareArr : number[] = arr.map((element : number) : number => element * element );