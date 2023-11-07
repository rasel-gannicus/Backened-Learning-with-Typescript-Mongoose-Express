{

    type todo = {
        userId : number, 
        id : number,
        title : string ,
        completed : boolean
    }

    const showData = async () : Promise<todo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
        return data;
    }

    showData();
    // console.log(showData());
















}