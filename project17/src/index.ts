

//strictly force initialization

class  fruit {
    name: string;
    taste: string;
    

    constructor(name: string, taste: string){
        this.name = name this.taste = taste
    }
}

const fruit1 = new fruit('apple','sweet')


console.log(fruit1.name)