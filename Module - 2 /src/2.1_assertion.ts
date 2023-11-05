

// --- type assertion 
// when we know the type before the typescript machine, it's kind of called assertion

let anything : any ;

anything = 'Hello world' ;

(anything as string).length //-- we declared 'as string' cz we know the variable is string. this is called assertion 

