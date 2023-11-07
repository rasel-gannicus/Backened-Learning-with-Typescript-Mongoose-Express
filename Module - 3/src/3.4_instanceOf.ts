

class Car {
    brand : string;
    color : string;
    country : string; 

    constructor(brand:string, color:string, country:string){
        this.brand = brand ; 
        this.color = color ;
        this.country = country ; 
    }

    myCar(){
        console.log(`${this.brand} is my car from ${this.country} in ${this.color} color`);
    }
}

class Audi extends Car {
    constructor(brand:string, color:string, country:string){
        super(brand, color, country) ; 
    }
    featureForAudi(){
        console.log(`${this.brand} has six rings`);
    }
}

class Mercedez extends Car { 
    constructor(brand:string, color:string, country:string){
        super(brand, color, country) ; 
    }
    featureForMercedez(){
        console.log(`${this.brand} is named after founder's daughter`);
    }
}

const getCar = (car : Car) => {
    if(car instanceof Audi){
        car.featureForAudi();
    }else if(car instanceof Mercedez){
        car.featureForMercedez();
    }else{
        car.myCar();
    }
}

const myCar1 = new Audi('audi', 'white', 'england');
const myCar2 = new Mercedez('mercedez', 'silver', 'canada');

getCar(myCar1); // audi has six rings
getCar(myCar2); // mercedez is named after founder's daughter
getCar(new Car('toyota', 'white', 'japan')) // toyota is my car from japan in white color

// myCar1.featureForAudi();
// myCar2.featureForMercedez();