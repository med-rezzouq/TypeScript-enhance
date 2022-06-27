

//getters and setters

class Fruit {
    readonly price: number;
    static count: number = 0;

    

    constructor(price: number){
        this.price = price
        Fruit.count++
    }

}



const price = new Fruit(40);

console.log(Fruit.count);
const price2 = new Fruit(40);

console.log(Fruit.count);

//we can also make it protected static count: number
//and also make geter for it :  protected static getPrice()
