
//--- spread operator for array
const cars1 : string[] = ['audi', 'bmw', 'mercedez'];
const cars2 : string[] = ['nissan', 'toyota', 'honda'];

// cars1.push(cars2); //-- it won't work because of typescript 
cars1.push(...cars2); //-- it will work


//--- spread operator for object

const cars3 = {
    germany : 'audi',
    england : 'bmw',
    italy : 'lamborghini'
}

const cars4 = {
    japan : 'nissan',
    korea : 'hyundai',
    singapore : 'kia'
}

const carsAssemble = {
    ...cars3,
    ...cars4
}


// --- rest operator 
const startEngine = (...brands : string[]) => {
    brands.forEach((brand : string) => console.log('Start ', brand));
}

startEngine('audi', 'bmw', 'mercedez')