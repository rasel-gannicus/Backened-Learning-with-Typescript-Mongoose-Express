
{

    // --- getter & setter method

    class BankAccount {
        public id: number;
        public name: string;
        private _balance: number; //-- we cannot change this property value cz it's 'private'. we have to add a method to change private property

        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }

        // --- normal method  
        getbalance = () : number => {
             console.log(this._balance);
             return this._balance;
        }
        // --- same method with 'getter' 
        get getBalance2(){
            console.log(this._balance);
            return this._balance;
        }

        // -- normal method
        addBalance = (amount : number) => {
            this._balance = this._balance + amount ;
        }
        // -- setter method 
        set addBalance2(amount : number){
            this._balance = this._balance + amount ; 
        }
    }
    
    const studentAccount = new BankAccount(55, 'rasel', 3500);

    //--- set value by normal method
    studentAccount.addBalance(500);
    //--- set value by setter method
    studentAccount.addBalance2 = 500;

    //--- get value by normal method
    studentAccount.getbalance();
    //--- get value by getter method
    studentAccount.getBalance2;



















}