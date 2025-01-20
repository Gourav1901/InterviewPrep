// class 

// Classes are the templates for creating objects. They encapsulate data 
//(properties) and behavior (methods)

class Person{

  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`hi my name is ${this.name} and my age is ${this.age}`)
  }
}

const person = new Person("Gourav",24)
const person2 = new Person("Hariom",23)

person.greet();
person2.greet()


class Animal{
  
  constructor(animal,speak){
    this.animal = animal
    this.speak = speak
  }

  hiii() {
    console.log(`the ${this.animal} says ${this.speak}`)
  }

}

const animal = new Animal("dog","bhowwww")
const animal2 = new Animal("Cat","Meoww")

animal.hiii();
animal2.hiii()


//Objects 

//Objects are instance of a class, represnting real-world entities

const car = {
  brand:"tesla",
  model:"Model S",
  drive(){
    console.log("Driving the car")
  }
}

car.drive();

//Inheritence 

//A class can inherit properties and methods from another class using the //..//extends keyeword.

class Animal{
  constructor(name){
    this.name = name;
  }

  speak() {
    console.log()
  }
}