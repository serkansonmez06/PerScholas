// let hotelCalifornia = {
//     name: 'Hotel California',
//     location: 'California',
//     rating: 4,
//     vacancies: true,
//     tags: [
//         'pink champagne',
//         'wine',
//         'lovely',
//         'can\'t leave'
//     ],
//     rooms: [{
//             'roomNumber': 102,
//             'size': 'Queen Double',
//             'price': 55,
//             'booked': true
//         },
//         {
//             'roomNumber': 202,
//             'size': 'King Suite',
//             'price': 68,
//             'booked': false
//         },
//         {
//             'roomNumber': 404,
//             'size': 'Queen Double',
//             'booked': false
//         }
//     ]
// };
// console.log(hotelCalifornia);
/**********************************/
//1-  Create a class called Fish
//1-a Define a method Swim( )

class Fish {
    constructor(age) {
        this.age = age;

    }
    swim() {
        console.log("The sailfish is the fastest fish in the world – able to swim at a speed of 68mph");
    }
}
const fish = new Fish(2);
fish.swim();
console.log(fish);

// 1-b Create a class Nemo that inherits from Fish
// Define an attribute color
// 1-c Create a Nemo object. Can it swim?

class Nemo extends Fish { // extends inherits from parents class to child class ClassName {

    constructor(age, color) {
        super(age); // super will inherit parent's attribute
        this.color = color; //this is new attribute
    }
    canItSwim() {
        this.swim = true;
    }
}


const nemo = new Nemo(22, "blue");
nemo.swim();
nemo.canItSwim("");
console.log(nemo);

// 2- Find the difference between abstract class and an interface
// Which of the two can have implementation of a method in the class?
//Interfaces can't have any concrete implementations.Abstract base classes can

// ***************************
//1- Create an Animal class.
// The class will have name, age, color, legs, superPower attributes
// Create two objects of this class - both with a unique superPower
// create three methods for this class - include one method named userSuperPower()
// Create two objects for this class

class Animal { //created animal class with 5 attributes
    constructor(name, age, color, legs, superPower) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
        this.superPower = superPower;
    }
    userSuperPower() {
        return `${this.name} can ${this.superPower}`; //three methods created
    }
    breed() {
        return `Breed is not available`;
    }
    runningPower() {
        return `${this.name} runs 5 mph`;
    }
}
const animal = new Animal("Cow", 3, "blue", 4, "speak");
console.log(animal.userSuperPower());
console.log(animal.runningPower());
console.log(animal.breed());
console.log(animal);

const animal1 = new Animal("Donkey", 4, "grey", 7, "swim")
console.log(animal1.userSuperPower());
console.log(animal1.runningPower());
console.log(animal1.breed());
console.log(animal1);

const animal2 = new Animal("Monkey", 8, "black", 9, "fly")
console.log(animal2.userSuperPower());
console.log(animal2.runningPower());
console.log(animal2.breed());
console.log(animal2);

// // 2-Create a class name User
// // This class with have firstName, lastName, department attributes
// // a method name changeDepartment()
// // Create three instances of this class
// // Change department for two of the instances
// // Create three objects for this class
//
class User {
    constructor(firstName, lastName, department) { //3 attributes
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
    }
    changeDepartment(newDepartment) { //method name
        this.department = department;
    }
}

const user = new User('Serkan', 'Sonmez', 'Finance'); //instances //instantination
user.changeDepartment('police department')
console.log(user);
const user1 = new User('Ashleigh', 'Wray', 'Fire');
user1.changeDepartment('hr');
console.log(user1);
const user2 = new User('George', 'Orwell', 'Public Service')
console.log(use2);