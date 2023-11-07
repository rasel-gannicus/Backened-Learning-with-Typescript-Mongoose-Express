
{

    // --- 'typeOf' typeguard

    type Alphaneumeric = number | string ; 

    const addNum = (number1 : Alphaneumeric, number2 : Alphaneumeric) : Alphaneumeric => {
        if(typeof number1 === 'number' && typeof number2 === 'number'){
            return number1 + number2; 
        }else{
            return number1.toString() + number2.toString();
        }
    } 

    console.log(addNum(5,23));  // 28
    console.log(addNum(5,'23')); // 523



    // --- 'in' typeguard

    type NormalUser = {
        name : string 
    }

    type AdminUser = {
        name : string;
        role : string;
    }

    const getUser = (user : NormalUser | AdminUser) => {
        if('role' in user){
            console.log(`My name is ${user.name}, my role is ${user.role}`);
        }else{
            console.log(`My name is ${user.name}`);
        }
    }

    const rasel : NormalUser = {
        name : 'rasel',
    }
    const jonathan : AdminUser = {
        name : 'jonathan',
        role : 'admin'
    }
    
    getUser(rasel);  // My name is rasel
    getUser(jonathan); // My name is jonathan, my role is admin









}