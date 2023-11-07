{


    type Person = {
        name: string;
        age: number;
        email: string;
        contactNo: string
    }

    type Result = Pick<Person, 'name' | 'age'>;  //-- this 'Pick' utility will pick only 'name' & 'age' from Person type

    type Result2 = Omit<Person, 'email' | 'name'>; //-- this 'Omit' utility will pick everything from type 'Person' except 'name' & 'email' 


    type Result3 = Required<Person> ; //-- this 'Required' utility will pick everything from Person type & it will make them required


    type Result4 = Partial<Person>; //-- this 'Partial' utility will pick everything from Person type & it will make them optional


    type PersonReadOnly = Readonly<Person> ; 
    const user : PersonReadOnly = {
        name: 'rasel',
        age: 24,
        email: 'rasel@gmail',
        contactNo: 'barisal'
    }
    user.name = 'jonathan' ; //-- it will show error as we made it read only types

    type MyObj = Record<string, number> ; //-- with this utility we can define type of object all at once. i mean all the property type can be set for once 
    const obj1 : MyObj = {
        name : 22,
        email : 34
    }

    type MyObj2 = Record<string, unknown> ; 
    const obj2 : MyObj2 = {
        name : 'rasel',
        email : 34
    }
    //-- with this utility 'Record<string, unknown>' we set the property type unknown so that in the time usage we will be able use any type for property that we couldn't do for 'Record<string, number>' utility





}