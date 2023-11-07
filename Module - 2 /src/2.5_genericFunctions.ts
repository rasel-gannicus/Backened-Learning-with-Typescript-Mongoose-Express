{

type normalFn = (num1 : number, num2 : number) => number ; 
const normalFN : normalFn = (value1, value2) => value1+value2 ; 

const regularFn = (value : string) : string[] => [value] ; 
const regularResult = regularFn('Bangladesh') ;

const dummy = <T>(value : T) : T[] => [value] ; 

const result = dummy<string>('Bangladesh');
const result2 = dummy<object>({name:'rasel', cars : false});

//-- we can write result2 like this
const result3 = dummy<{name:string, cars:boolean}>({name:'rasel', cars : false}); 

//-- we can write result3 like this
type user = {name:string, cars:boolean};
const result4 = dummy<user>({name:'rasel', cars : false}); 

//-- we can use tuple with generic functions
const dummy2 = <X, Y>(value1:X, value2:Y):[X, Y] => [value1, value2];
const resul5 = dummy2<number, string>(250, 'audi');

const addStudentToCourse = <X>(student:X) => {
    const course = 'Learn Typescript' ; 
    return {...student, course} ; 
}
const result6 = addStudentToCourse({name:'rasel', cars:false, home:true});
const result7 = addStudentToCourse<{name:string,cars:boolean, profession:string}>({name:'jonathan', cars:true, profession : 'assasin'});



}