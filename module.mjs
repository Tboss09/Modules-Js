export class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    get metaData (){
        return `Name:${this.name} Type:${this.name}`
    }
}