{
    // --- Access Modiefiers. 
    // --- Public, Private, Protected

    class BankAccount {
        public id: number;
        public name: string;
        public balance: number; //-- we can change this value anytime from anywhere

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this.balance = balance;
        }
    }

    const myAccount = new BankAccount(22, 'rasel', 2500);
    myAccount.balance = 200; //-- we can change any property value if it's public
    console.log(myAccount.balance); // 200

}

{
    // --- Access Modiefiers. 
    // --- Public, Private, Protected

    class BankAccount {
        public id: number;
        public name: string;
        private _balance: number; //-- we cannot change this property value cz it's 'private'. we have to add a method to change private property

        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }

        // -- we have to create method for changing private property value. in this case we will change 'balance' property which is private
        addBalance = (amount : number) => {
            this._balance = this._balance + amount ;
        }
        getbalance = () : number => {
            return this._balance;
        }

    }

    const myAccount = new BankAccount(22, 'rasel', 2500);
    // myAccount.balance = 200; //-- we cannot change  property value if it's 'private'
    myAccount.addBalance(5000) ;
    console.log(myAccount.getbalance()); // 7500 

}

{
    // --- Access Modiefiers. 
    // --- Public, Private, Protected

    class BankAccount {
        public id: number;
        public name: string;
        protected balance: number; //-- we can change this value anytime from anywhere

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this.balance = balance;
        }
    }

    // const myAccount = new BankAccount(22, 'rasel', 2500);
    
    class StudentAccount extends BankAccount {
        constructor(id: number, name: string, balance: number) {
            super(id, name, balance);
        }
        seeStudentBalance(){
            this.balance = 999 ; //-- we would not able to see 'balance' property if it was 'private' in parent property
            console.log(this.balance);
        }
    }  
}