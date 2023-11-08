

{
    class Counter {
        count: number = 0;

        increamentCount() {
            return this.count = this.count + 1;
        }

        decreamentCount() {
            return this.count = this.count - 1;
        }
    }

    const counter1 = new Counter();
    const counter2 = new Counter();

    // console.log(counter1.increamentCount()); // 1
    // console.log(counter2.increamentCount()); // 1
}

// --- now if we do this with static 
{
    class Counter {
        static count: number = 0;

        increamentCount() {
            return Counter.count = Counter.count + 1;
        }

        decreamentCount() {
            return Counter.count = Counter.count - 1;
        }
    }

    const counter1 = new Counter();
    const counter2 = new Counter();

    console.log(counter1.increamentCount()); // 1
    console.log(counter2.increamentCount()); // 2
}
{
    class Counter {
        static count: number = 0;

        static increamentCount() {
            return Counter.count = Counter.count + 1;
        }

        static decreamentCount() {
            return Counter.count = Counter.count - 1;
        }
    }

    const counter1 = new Counter();
    const counter2 = new Counter();

    console.log(Counter.increamentCount()); // 1
    console.log(Counter.increamentCount()); // 2
}