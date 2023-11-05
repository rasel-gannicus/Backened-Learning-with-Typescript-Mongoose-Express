{

type GenericArray<T> = Array<T> ;

const numbers : number[] = [2,3,4,5,6] ; 
const numbers2 : Array<number> = [2,3,4,5,6] ; //-- generic type
const numbers3 : GenericArray<number> = [2,3,4,5,6] ; //-- generic type

const cars : string[] = ['audi', 'bmw', 'mercedez'] ; 
const cars2 : Array<string> = ['audi', 'bmw', 'mercedez'] ; //-- generic type

const boolsArr : boolean[] = [true, false, true];
const boolsArr2 : Array<boolean> = [true, false, true]; //-- generic type


const user : GenericArray<{name : string, city : string}> = [
    {
        name : 'rasel',
        city : 'barisal'
    },
    {
        name : 'jonathan',
        city : 'dhaka',
    }
]



type carsTuple = [string, number, boolean] ; 
const cars5:carsTuple = ['audi', 35, true] ; 
const cars6 : [string, number, boolean] = ['bmw', 45, false] ;

type genericTuple <X, Y> = [X, Y] ;

const cars7 : genericTuple<string, number> = ['audi', 3];
const cars8 : genericTuple<string, {year : number, category : string}> = ['audi', {year : 2015, category : 'A'}]

}