// var person = { // created a class. create object in one statement
//     firstName: "Jan",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: 'blue',
//     fullName() {
//         return `${this.name} can ${this.superPower}`;
//     }
// };

// var employee = person;
// employee.age = 45;
// var employee = person;
// employee.age = 45;
// person.hobby = 'reading'; // we can add property inside object
// console.log(person);
// console.log(person['age']); //we can you [''] when we call age
// console.log(person.age);
// console.log(employee.age);
// for (x in person) {
//     console.log(person[x]);
// }

// var person = {
//     name: "John",
//     age: 30,
//     city: "nyc"
// };
// var myArray = Object.values(person);
// console.log(myArray);
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//     this.greet() 
//         return console.log(`Hello ${this.firstName} ${this.lastName}`);
//     }

// var myFather = new Person("John", "Doe", 50, "blue");

// console.log(myFather);
function fruits() {
    this.name = 'fruit 1';
}

function apple() {
    fruits.call(this)
}
apple.prototype = Object.create(fruits.prototype);
const app = new apple();
console.log(app);