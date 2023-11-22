
export type Username = {
    name : {
        firstName : string ;
        middleName : string ;
        lastName : string ;
    }
}

export type Guardian = {
    fatherName : string;
    fatherOccupation :string ;
    fatherContactNo : string ;
    motherName : string ;
    motherOccupation : string ;
    motherContactNo : string ;
}

export type LocalGuardian = {
    name : string ; 
    occupation : string ;
    contactNo : string ;
    address : string ;
}

export type Student = {
    id : string,
    name : Username,
    gender : 'male' | 'female';
    dateOfBirth : string ;
    email : string ;
    avatar ? : string ;
    contactNo : string ;
    emergencyContactNo : string ;
    bloodGroup ? : 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-' ;
    presentAddress : string ; 
    parmanentAddress : string ;
    guardian : Guardian ; 
    localGuardian : LocalGuardian;
    profileImg ? : string ;
    isActive : 'active' | 'inActive' ;
}