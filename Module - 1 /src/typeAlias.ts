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

















}