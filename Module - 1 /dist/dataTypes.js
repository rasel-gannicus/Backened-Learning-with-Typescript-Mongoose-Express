"use strict";
// --- Basic types
// -- string
let car = 'Audi'; //-- javascript . we can assign anything(number, boolean, null, string) to car variable, like "car = 200 " ;  
let car1 = 'Audi'; //-- typescript. we cannot assign anything accept string(or whatever we define after ':' symbol). like we cannot assign "car1 : string = 200 " ;
//-- number 
let cc = 1500; //-- javascript.
let cc1; //-- typescript
//-- boolean
let isSedan = true; //-- javascript
let isSedan1 = true; //-- typescript
//-- null
let price = null; //-- javascript
let price1 = null; //-- typescript
//-- undefined 
let fuel = undefined; //-- javascript
let fuel1 = undefined; //-- typescript
//-- array[] 
let brand = ['Audi', 'Bmw', 2500, 'Mercedez', false]; //-- javascript. we can put anything together in this array. like array[string, number, boolean, null] ; 
let brand1 = ['Audi', 'BMW', 'Mercedez']; //-- typescript. we can only put string value in this array as we defined 'string[]' after ':'; 
let brand2 = [400, 500, 600, 900]; //-- typescript. we can only put number value in this array as we defined 'number[]' after ':' 
//--- tuple. if we want to put various types of data in an array we have to use tuple. 
let brand3 = ['Audi', 2500, true];
//--- object type 
let carObject = {
    brand: 'Audi',
    cc: 2500,
    sports: false,
    country: 'england' //-- javascript
};
let carObject2 = {
    brand: 'Audi',
    cc: 2500,
    sports: false,
    country: 'england' //-- typescript
};
let carObject3 = {
    brand: 'Mercedez',
    cc: 2500,
    sports: false,
    country: 'england' //-- typescript
};
let carObject4 = {
    brand: 'Mercedez',
    cc: 2500,
    sports: false,
    country: 'england' //-- typescript
};
