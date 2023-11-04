{

// --- union types

type japaneseCar = 'Toyota' | 'Nissan' ; //--- it can also be called as union literals

const car : japaneseCar = 'Nissan' ; 

type cars = {
    brand : string;
    engine : number;
    country : 'japan' | 'england'
}

const audi : cars = {
    brand : 'nissan',
    engine : 2500 ,
    country : 'japan' 
}


// --- intersection types
type usedCar1 = {
    brand : string[],
    condition1 : 'good'
}

type usedCar2 = {
    brand : string[],
    condition2? : 'excellent' 
}

type usedCar = usedCar1 & usedCar2 ;

const buyCar : usedCar = {
    brand : ['audi', 'bmw', 'mercedez'],
    condition1 : 'good' ,
}











}