
{

    interface genericInterFace<T, X = null> {
        name : string,
        profession : string, 
        salary ? : number,
        married : boolean,
        cars : T ,
        bikes ?: X 
    }

    interface forAudi {
        brand : string;
        year : number;
        color : string;
        cc : number
    }

    interface forBike {
        brand : string,
        cc : number,
        premium : boolean
    }

    const user : genericInterFace<forAudi, forBike> = {
        name : 'rasel',
        profession : 'dev',
        married : true, 
        cars : {
            brand : 'audi',
            color : 'white', 
            year : 2015,
            cc : 2200
        },
        bikes : {
            brand : 'Yamaha',
            cc : 150,
            premium : true 
        } 
    }
    const user2 : genericInterFace<forAudi> = {
        name : 'rasel',
        profession : 'dev',
        married : true, 
        cars : {
            brand : 'audi',
            color : 'white', 
            year : 2015,
            cc : 2200
        }  
    }























}