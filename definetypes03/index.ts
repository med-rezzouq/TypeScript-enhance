//string
let myName: string = "med"

//number
let year: number = 2020


//boolean
let isEnabled: boolean
isEnabled = true

//array types
let guests: string[] = ['joe', 'jeni', 'john'];

//types of functions
let myFunction: (name: string) => string;
 myFunction = function (name) {
    return name.toUpperCase()
}

//other way to define function
const myFunc = function (name:string):string {
    return name.toUpperCase()
}