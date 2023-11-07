{

type cars = {
    brand : string;
    country : string;
    sports : boolean
}

type keyOfCars = {
    [index in keyof cars] : number ;
}  
/* output of keyOfCars : 

type keyOfCars = {
    brand: number;
    country: number;
    sports: number;
}

*/

type KeyOfCars2<T> = {
    [index in keyof T] : T[index] ; 
}

const findCars : KeyOfCars2<cars> = {
    brand : 'audi',
    country : 'england',
    sports : false
}










}