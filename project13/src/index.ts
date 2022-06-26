//object type we can explicitly define also the elements of the object and their values

let fruit: {
    name: string
    taste:string
}

fruit= {
    name: "Apple",
    taste: "delicieux"
}



console.log(fruit.name)


//we can also write it this way

// let fruit: {
//     name: string
//     taste:string
// }= {
//     name: "Apple",
//     taste: "delicieux"
// }



//we can also write it this way be define type and assign it for multiple uses

//we can also write it this way

type FruitType = {
     name: string
     taste:string
}

let fruit1:FruitType ={
    name: "Apple",
    taste: "delicieux"
}

console.log(fruit1.name)