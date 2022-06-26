


//using interface instead of type definition


  interface FruitType {
     name: string
     taste:string
}

interface Apple extends FruitType {
    color: string
}


//or we can make union with type and interface like
// type Apple = FruitType & {
//     color: string
// }



let fruit1:Apple ={
    name: "Apple",
    taste: "delicieux",
    color: "red",
   
}

console.log(fruit1.name)