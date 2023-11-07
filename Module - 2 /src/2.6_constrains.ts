{


const addStudentToCourse = <X extends {id:number, email:string, name:string}>(student:X) => {
    const course = 'Learn Typescript' ; 
    return {...student, course} ; 
}
const result = addStudentToCourse({name:'rasel', email:'rasel@gmail',id:3, cars:false, home:true});
const result2 = addStudentToCourse({name:'jonathan', email:'rasel@gmail', id:4, cars:true, profession : 'assasin'});












}