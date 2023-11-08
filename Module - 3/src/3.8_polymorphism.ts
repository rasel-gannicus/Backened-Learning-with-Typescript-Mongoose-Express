
{

    class Person {
        getName() {
            return 'My name is X';
        }
    }

    class Rasel extends Person {
        getName(): string {
            return 'My name is Rasel';
        }
    }

    class Jonathan extends Person {
        getName(): string {
            return 'My name is Jonathan';
        }
    }

    const person1 = new Rasel();
    const person2 = new Jonathan();

    const showNames = (person: Person) => {
        console.log(person.getName());
    }

    showNames(person1);  // My name is Rasel
    showNames(person2);  // My name is Jonathan


    // --- different example 
    class Cars {
        getCarDetails(){
            return '';
        }
    }

    class Audi extends Cars {
         color : string ; 
         constructor(color:string){
            super();
            this.color = color ;
         }

         getCarDetails(): string {
            return `I have Audi which is in ${this.color} `
         }
    }
    
    class Mercedez extends Cars {
        brand : string ;
        country : string ;

        constructor(brand:string, country:string){
            super();
            this.brand = brand ; 
            this.country = country ; 
        }

        getCarDetails(): string {
            return `${this.brand} is my car from ${this.country}` ;
        }
    }


    const car1 = new Audi('white');
    const car2 = new Mercedez('Mercedez', 'Canada'); 

    const getDetails = (param : Cars) => {
        console.log(param.getCarDetails());
    }

    getDetails(car1);  // I have Audi which is in white 
    getDetails(car2);  // Mercedez is my car from Canada





}