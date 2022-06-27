

//getters and setters
type Person = { firstname : string};

    

    function getPerson <T>(data: T):T{
            return data
    }






const details = { lastname : "Med" }
//as you see its not complaining that firstname is missing
console.log(getPerson(details))


//but if we do the following

function getPerson2 <T extends Person>(data: T):T{
    return data
}



const details2 = { lastname : "Med" }
//as you see its  complaining that firstname is missing
console.log(getPerson2(details2))



//we can pass a object as parameter like this

function getElement<O extends Object, K extends keyof O>(obj:O,key:K){
    return obj[key]
}

console.log(getElement(details,'lastname'));
