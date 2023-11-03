
// --- Basic types

// -- string
let car = 'Audi' ; //-- javascript . we can assign anything(number, boolean, null, string) to car variable, like "car = 200 " ;  
let car1 : string = 'Audi' ; //-- typescript. we cannot assign anything accept string(or whatever we define after ':' symbol). like we cannot assign "car1 : string = 200 " ;

//-- number 
let cc = 1500 ; //-- javascript.
let cc1 : number ; //-- typescript

//-- boolean
let isSedan = true ; //-- javascript
let isSedan1 : boolean = true ; //-- typescript

//-- null
let price = null ; //-- javascript
let price1 : null = null ; //-- typescript

//-- undefined 
let fuel = undefined ; //-- javascript
let fuel1 : undefined = undefined ; //-- typescript

//-- array[] 
let brand = ['Audi', 'Bmw', 2500, 'Mercedez', false] //-- javascript. we can put anything together in this array. like array[string, number, boolean, null] ; 
let brand1 : string[] = ['Audi', 'BMW', 'Mercedez'] ; //-- typescript. we can only put string value in this array as we defined 'string[]' after ':'; 
let brand2 : number[] = [400, 500, 600, 900] ; //-- typescript. we can only put number value in this array as we defined 'number[]' after ':' 

//--- tuple. if we want to put various types of data in an array we have to use tuple. 
let brand3 : [string, number, boolean] = ['Audi', 2500, true] ; 

//--- object type 
let carObject = { 
    brand : 'Audi',
    cc : 2500,
    sports : false,
    country : 'england' //-- javascript
}

let carObject2 : {
    brand : string,
    cc : number,
    sports : boolean,
    country : string 
} = {
    brand : 'Audi',
    cc : 2500,
    sports : false,
    country : 'england' //-- typescript
}

let carObject3 : {
    brand : 'Mercedez', //-- it's a custom type. it is called literals. we can not change or reassign it ever. 
    cc : number,
    sports : boolean,
    country : string 
} = {
    brand : 'Mercedez', //-- if we assign anything here rather 'Mercedez', there will be error. 
    cc : 2500,
    sports : false,
    country : 'england' //-- typescript
}

let carObject4 : {
    readonly brand : string, //-- it is read only data. we cannot change it later after assigning first time.  
    cc : number,
    sports : boolean,
    country : string 
} = {
    brand : 'Mercedez', //-- it is read only data. we cannot change it later.  
    cc : 2500,
    sports : false,
    country : 'england' //-- typescript
}
