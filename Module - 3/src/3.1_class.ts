


// ---- class in typescript with paramters
class Cars {

    // using 'parameters' in constructor
    constructor(public brand: string, public country: string, public year: string) {}

    //-- method 
    showDetails() {
        console.log(`I have bought ${this.brand} from ${this.country} in ${this.year}`);
    }
}

const audi = new Cars('audi', 'england', '2015');
const bmw = new Cars('bmw', 'england', '2022');

console.log(audi.year); // output = '2015'
console.log(bmw.year);  // output = '2022'

audi.showDetails(); //-- output = 'I have bought audi from england in 2015'
bmw.showDetails(); //-- output = 'I have bought bmw from england in 2022'










