

//getters and setters

class  fruit {
    protected name: string;
    protected taste: string;
    

    constructor(name: string, taste: string){
        this.name = name;
        this.taste = taste;
    }

    public getName() {
        return this.name
    }
}

class myFruit extends fruit{

    public getTheName(){
        console.log(this.name)
    }
    public setName(name: string) {
        
    }
}


const fruit1 = new myFruit('apple', 'sweet');
fruit1.setName('apple');


fruit1.getTheName()