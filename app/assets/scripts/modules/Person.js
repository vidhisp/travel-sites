class Person{
    constructor(fullName, favColor){
        this.name = fullName;
        this.color = favColor;
    }

 greet() {
        console.log("Hi, my name is " + this.name + "and my fav color is " + this.color);
    }
}  

//module.exports = Person;

export default Person;