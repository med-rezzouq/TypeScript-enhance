

//how to make a preperty optional

//we can also write it this way

type FruitType = {
     name: string
    taste: string
     color?:string  // we add the ask mark to make it oiptional 
}

let fruit1:FruitType ={
    name: "Apple",
    taste: "delicieux"
}

function getColor(color: string) {
        "i love" + color    
}

//we add exclamation when the argument is missing
console.log(getColor(fruit1.color!))