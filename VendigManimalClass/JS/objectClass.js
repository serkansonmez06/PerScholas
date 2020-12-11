let student = {

  first_Name: 'Serkan',//we can add more object (we can add grade)
  last_Name: 'Sonmez',
  class: 'Software Engineer'

}
console.log(student);
// ///***************************/
 let places = {
   place1 :'Boston',
   place2 :'617', //you can assign a formula and get final result 617 + 3 = print 620
   place3 :'mass',
   place4 :'5,78',
   place5 :'ank',
 }
//anything can have value we can create object of map
console.log(places);

class Person {
  constructor() {
    this.firstName = 'orion',
    this.secondName = 'Sirus'
  }
  getFullName(){
    console.log('my name is ${this.firstName} ${this.lastName}');
  }
  greet(otherPerson){
    console.log('hi ${otherPerson}');
  }
};

const me = new Person();
console.log(me);
// /**************************************/
class Person {
  constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
    this.legs = 2;
    this.arms = 2;
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
    this.lovesCats = lovesCats;
    this.lovesDogs = lovesDogs || true;
  }
  greet (otherPerson) {
    console.log('hi ' + otherPerson + '!');
  }
  setHair (hairColor) {
    this.hair = hairColor;
  }
  walk () {
    console.log('I hate when my Segway is in the shop.');
  }
}

const you = new Person('Matt', 36, 'blue', 'blonde');
console.log(you);
you.setHair('red');
console.log(you);

// /**************************************/
//create class
class Dog {
  constructor(name,age,color,breed) {
    this.months=6;  //pay attention to syntax
    this.name=name;
    this.age= age;
    this.color=color;
    this.breed=breed;
  }running(){

  }singing(){

  }barking(){

  }eating(){

  }
};
const dog = new Dog ('blueHill',2,'Brown','German Sheperd')
console.log(dog);
const dog1 = new Dog ('rainbow', 4, 'white', 'Labrador')
console.log(dog1);
const dog2 = new Dog ('Star', 1, 'Black','Bulldog')
console.log(dog2);

// //************************************
const increaseByTwo = [1, 2, 3, 4, 5];


for( var i=0; i < increaseByTwo.lenght; i++ ){
   increasedByTwo[i]=increasedByTwo[i]+2
}
// Uncomment the line below to check your work!
console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];


//*************************************
//OOP - Classes: Model a vending machine

//  a vending machine is an object
//  it has an array of snacks (make 3 snacks)
//  snacks are objects that have a name and a price
//  a vending machine has a function vend that allows user
//  to enter the array position (a number) of the snack and then that snack will be returned
//  Be able to call vendingMachine.vend() with a valid integer to return a snack

/*solution*/
const vendingMachine = { //create arrays with contains three elements with name: , and price:
  snacks: [
    {
      name : 'cookie',
      price : 3,
    },
    {
      name : 'M&M',
      price : 4,
    },
    {
      name : 'chocolate',
      price : 5,
    }
  ],
  vend (input){ // create function it takes input as index of snacks array

    console.log(vendingMachine.snacks[input]);
  }// index of snacks
};
vendingMachine.vend(0); //print index of vendingMachine with function vend index of 0,1,2
