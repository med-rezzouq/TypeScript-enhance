"use strict";
//getters and setters
class fruit {
    constructor(name, taste) {
        this.name = name;
        this.taste = taste;
    }
    getName() {
        return this.name;
    }
}
class myFruit extends fruit {
    getTheName() {
        console.log(this.name);
    }
    setName(name) {
    }
}
const fruit1 = new myFruit('apple', 'sweet');
fruit1.setName('apple');
fruit1.getTheName();
