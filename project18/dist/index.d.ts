declare class fruit {
    protected name: string;
    protected taste: string;
    constructor(name: string, taste: string);
    getName(): string;
}
declare class myFruit extends fruit {
    getTheName(): void;
    setName(name: string): void;
}
declare const fruit1: myFruit;
