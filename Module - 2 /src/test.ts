
{


let carDetails : any ;
carDetails = 'I only got 6 cars' ; 

(carDetails as string).concat ; //-- we know the variable will be string. 

carDetails = 2500 ;
(carDetails as number); //-- we know the variable will be number

const kgToGm = (value : number | string) : string | number | undefined => {
    if(typeof value === 'number'){
        return value * 1000 ; 
    }
    if(typeof value === 'string'){
        const convertedValue = parseInt(value) * 1000
        return `Summation is ${convertedValue}`
    }
}

const result1 = kgToGm(25) as number //-- we used 'as number' because we know the return will be number

const result2 = kgToGm('12') as string //-- we used 'as string' cz we know the return will be string


type customError = {
    message : string ;
}

try{

}catch(error){
    console.log((error as customError).message);
}
















}