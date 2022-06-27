"use strict";
//getters and setters
class Fruit {
    constructor(price) {
        this.price = price;
        Fruit.count++;
    }
}
Fruit.count = 0;
const price = new Fruit(40);
console.log(Fruit.count);
const price2 = new Fruit(40);
console.log(Fruit.count);
//we can also make it protected static count: number
//and also make geter for it :  protected static getPrice()
