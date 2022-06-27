

//getters and setters
let arrayElements = [45, 10, 555, 12345];

    

    function getRandomElement(arr: any[]):any{
        const index = Math.floor(Math.random() * arr.length)
                
            return arr[index]
    }






let result: string
console.log(getRandomElement(arrayElements));

let arrayStringElements = ['a', 'b', 'c', 'd'];

console.log(getRandomElement(arrayElements));

result = getRandomElement(arrayElements);

console.log(typeof result); // will show number and its a bug here because we defined result as string


//to solve this we use generic types so our function will need to become like this


function getRandomElementGeneric<T>(arr: T[]):T{
    const index = Math.floor(Math.random() * arr.length)
            
        return arr[index]
}

//so now typescript will complain
result = getRandomElementGeneric(arrayElements);
