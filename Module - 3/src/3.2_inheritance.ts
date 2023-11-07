
{
    class Student {
        constructor(public name: string, public age: number, public email: string) { }

        // -- method
        getSleep(hours: number) {
            console.log(`${this.name} who is ${this.age} years old sleep for ${hours}`);
        }
    }

    class Teacher {
        constructor(public name: string, public age: number, public email: string, public designation : string) { }

        getSleep(hours: number) {
            console.log(`${this.name} who is ${this.age} years old sleep for ${hours}`);
        }

        // -- method
        getClassHours(hours:number){
            console.log(`${this.designation} ${this.name} take classes for ${hours}`);
        }
    }

    const user = new Student('rasel', 28, 'rasel@gmail');
    const user2 = new Teacher('jonathan',34, 'wick@gmail', 'Professor');

    user.getSleep(4); //-- output = "rasel who is 28 years old sleep for 4"
    user2.getSleep(2); //-- output = "jonathan who is 34 years old sleep for 2"
    user2.getClassHours(8); //-- output = "Professor jonathan take classes for 8"














}