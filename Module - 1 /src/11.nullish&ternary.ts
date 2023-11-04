{

//--- ternary operator

const age : number = 2 ;

// if(age >= 18){
//     console.log('Adult');
// }else{
//     console.log('Not adult');
// }


const findAge = age >= 20 ? 'Adult' : 'Children';
// console.log({findAge});

// --- nullish 
const isAuthenticated = '' ;

const result1 = isAuthenticated ?? "guest" ; 
const result2 = isAuthenticated ? isAuthenticated : 'guest';

// console.log({result1}, {result2});

type userType = {
    name : string;
    address : {
        city : string ; 
        state : string ;
        permanentAddress ? : string ;
    }
}

const user : userType = {
    name : 'rasel',
    address : {
        city : 'bhandaria',
        state : 'barisal',
    }
}

const permanentAddress = user?.address?.permanentAddress ?? 'Not found' ;

console.log(permanentAddress);







}