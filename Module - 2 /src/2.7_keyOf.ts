{


    type user = {
        name : string;
        id : number,
        email : string 
    }

    type userKey = 'name' | 'id' | 'email' ; //-- this is called keyOf
    type userKey2 = keyof userKey ;      //-- this is as same as the previous line

    const rasel = {
        name : 'rasel',
        id : 35,
        email : 'rasel@gmail'
    }

    const findUser = <X, Y extends keyof X>(obj:X, key:Y) => {
        return obj[key];    //-- rasel[id] = 35 ;
    }

    const result = findUser(rasel, 'email');
















}