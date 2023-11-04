{



    //--- regular type script 
    const user: {
        name: string,
        profession: string,
        age: number,
        married: boolean
    } = {
        name: 'rasel',
        profession: 'webdev',
        age: 28,
        married: true
    }

    // --- type script with type alias 
    type userType = {
        name: string,
        profession: string,
        age: number,
        married: boolean
    }

    const user2 : userType = {
        name: 'rasel',
        profession: 'webdev',
        age: 28,
        married: true
    }
    const user3 : userType = {
        name: 'abir',
        profession: 'banker',
        age: 27,
        married: true
    }


    //--- type alias for other types 
    type userName = string  //-- string type
    type isAdmin = boolean  //-- boolean type
    type functionType = (num : number, num2 : number) => number ; //-- type alias for function

    const addNumber : functionType = (num, num2) => {
        return num + num2
    }

















}