

// --- type assertion 
// when we know the type before the typescript machine, it's kind of called assertion

let anything : any ;

anything = 'Hello world' ;

(anything as string).length //-- we declared 'as string' cz we know the variable is string. this is called assertion 

const kgToGm = (num : string | number) : string | number | undefined => {
    if(typeof num === 'number'){
        return num * 1000 ; 
    }
    if(typeof num === 'string'){
        let convertedValue = parseInt(num) * 1000
        return `Kg to gm is  ${convertedValue}` ;
    }
}

const result1 = kgToGm(2) as number ; //-- cz we know the output will be number
const result2 = kgToGm('2') as string ; //-- cz we know the output will be string


type customError = {
    message : string
}
try {

}catch(error){
    console.log((error as customError).message);
}

