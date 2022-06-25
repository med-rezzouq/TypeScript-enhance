//never type

function sum(a: number, b: number) {
    
}

function raiseError(message:string) :never{
    throw new Error(message)

    //it stops and will not execute this bellow so it never expect to return something because execution broken with error thrown
    
    console.log(message)
    
}