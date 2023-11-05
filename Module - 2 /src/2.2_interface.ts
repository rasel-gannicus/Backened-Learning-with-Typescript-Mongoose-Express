

{


    // --- type alias 
    type user = {
        name : string;
        profession : string;
        salary ? : number; //-- '?' sign is for making this property optional, user can add it or not
        married : boolean;
    }

    const rasel : user = {
        name : 'rasel',
        profession : 'webdev',
        married : true
    }

    // --- interface 
    interface userWithInterface {
        name : string;
        profession : string;
        salary ? : number; //-- '?' sign is for making this property optional, user can add it or not
        married : boolean;
    }

    const abir : userWithInterface = {
        name : 'abir',
        profession : 'banker',
        married : true
    }

    // --- 'intersection' system in type alias
    type userWithId = user & {id : number}
    const rasel2 : userWithId = {
        name : 'rasel',
        profession : 'webdev',
        married : true,
        id : 6663719
    }

    // --- 'intersection' system in interface
    interface userWithInterface2 extends userWithInterface {id : number} ;    
    const abir2 : userWithInterface2 =  {
        name : 'abir',
        profession : 'banker',
        married : true,
        id : 2,
    }

    // --- interface for array[]
    type roll = number[];  //-- type alias
    const class6 : roll = [1,2,3,4,5]; //-- array with type alias

    interface rollWithInterface {
        [index : number] : number
    }
    const class7 : rollWithInterface = [1,2,3,4,5]  //-- array with interface


    // --- interface for function 
    type add = (num : number, num2 : number) =>  number ; //-- type alias    
    const addNumber : add = (num1, num2) => num1 + num2 ; //-- function with type alias

    interface addInterface {
        (num : number, num2:number) : number  //-- interface for function 
    }
    const addNumber2 : addInterface = (num1, num2) => num1 + num2 ; //-- function with interface







}