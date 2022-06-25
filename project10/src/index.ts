let myNum;
let price;
console.log(myNum, price);
console.log(typeof myNum, typeof price + "\n");
myNum = undefined;
price = null;
//as we see below the type and value of undefined are both undefined it doesnt assign yet any value but for null value is object
console.log(myNum, price);
console.log(typeof myNum, typeof price + "\n");


//variables with null and defined declaration example let muNum:null you can only assign the undefined or nulll aswell

//you cannot assign to a variable declared undefined ex : let price:undefined you cant assign to it after

//the use case of undefined and null here when we want assign a variable that can be null from like a api callback

let price3: Number | undefined | null;
console.log(price3);
price3 = 333;

console.log(price3);
price3 = undefined;

console.log(price3);

price3 = null;

console.log(price3);
