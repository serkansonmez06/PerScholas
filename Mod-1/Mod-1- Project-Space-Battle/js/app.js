//  hull =>0  ship will be destroy below 0 
//  firepower: amount of damge
//  0<accurancy<1 chance to hit ship
//  Math.random() use for chance damage 
//  if accuracy is 0.8 and math.random is less attack is failed
//  spaceship={ hull:20 , firepower:5, accurancy:0.7}
//  alienship={hull: 3 and 6, firepoer: 2 and 4, accuracy:0.6 and 0.8}
//  this.hull = Math.floor(Math.random() * 4) + 3; 
//  this.firepower = Math.floor(Math.random() * 3) + 2; 
//  this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
//  javascript if (Math.random() < alien[0].accuracy) { console.log('You have been hit!'); } ```
//  `alert()  `javascript alert('oh hai!'); 
//  user input in the browser `prompt()`
//  spaceship and alien spacehip(class)
//  attack(); methods and with loops or multiple loops till one of them destroy
//  tested and working,
//  When the game is over, prompt the user if they would like to play again
//  USS_Schwarzenegger object. attack(target);
//  hull <= 0 'kabloo-ey' 
//  allienAttack(toUs) ..log('end of the round')
//  attacks will keep occurring until someone's hull is at 0
//  Make a loop that calls the Class and generates alien ships. Push those constructed objects into a predefined array

/******************  1- prompt() and alert() *****************/

alert('oh hai!'); // window alert box

let sign = prompt("We must identify yor Galaxy name. Security purpose" + "\r\n" +
    "\r\n" + "Please enter yor Galaxy name to continue!!!" + "\r\n" +
    "\r\n" + "Hint: Milky Way Galaxy "); // prompt input box.. \r\n breake line. 


if (sign == "Milky Way Galaxy") { // input match, display alert
    alert("Thanks for provided information!" + "\r\n" + "\r\n" + "Please save us from Aliens." + "\r\n" + "\r\n" + "Good luck!!"); // display message after user filled the input field
} else { //input didnt match, ask same question and display congrat message!
    alert("Please enter correct answer!") +
        prompt("We must identify yor Galaxy name. Security purpose" + "\r\n" + "\r\n" + "Please enter yor Galaxy name to continue!!!" + "\r\n" + "\r\n" + "Hint: Milky Way Galaxy ");
    alert("Thanks for provided information!" + "\r\n" + "\r\n" + "Please save us from Aliens." + "\r\n" + "\r\n" + "Good luck!!");
}

//**************** 2- Spaceship vs Aliens  ****************/

console.log("%c Game will start 3.2.1!", "font-weight: bold; background: lightgreen; border: 1px dotted; font-size:30px;");

class UssSpaceShip {

    constructor(name, hull, firepower, accuracy) { // Spacehip class with properties
        this.name = name; //name of spaceship
        this.hull = 20; // hitpoints
        this.firepower = 5; // amount of damage done to hull
        this.accuracy = 0.7; // 0 <accuracy < 1 chance of hit target
    }
    attack(target) { // methot() attack to target

        let numOfaccurancy = Math.random(); // math.rand() pick numbers 
        if (numOfaccurancy < this.accuracy) { // if picked num is less than accurary(pre defined-0.8) lost
            target.hull = target.hull - this.firepower; //remaing hull
            console.log("%c Great Job - " + target.hull + " will destroy soon", "font-weight: bold; background: orange; border: 1px dotted; font-size:30px;");

        } else { // else will print miss target
            console.log("%c" + target.hull, "font-weight: bold; background: orange; border: 1px dotted; font-size:30px;");
        }
    }
};
class AlienSpaceShip {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = Math.round((Math.random() * (6 - 3)) + 3);
        this.firepower = Math.round((Math.random() * (4 - 2)) + 2);
        this.accuracy = ((Math.random() * (0.8 - 0.6)) + 0.6);
        this.isAlive = true;
    }
    attack(target1) {
        let numOfaccurancy = Math.random();
        if (numOfaccurancy < this.accuracy) {
            target1.hull -= this.firepower;
            console.log("%c" + target.hull + " is attacking!", "font-weight: bold; background: orange; border: 1px dotted; font-size:30px;");
        } else {
            console.log("%c Could not hit " + target1.hull + "font-weight: bold; background: orange; border: 1px dotted; font-size:30px;");
        }
        if (numOfaccurancy <= this.accuracy) {
            target1.hull = target1.hull - this.firepower;
            console.log(target1.hull)

        } else {
            console.log("Nice try")
        }
    }
};

let totalNumberOfaliens = 6; //pre define number of aliens
let aliveAlien = []; //array will store each alien till 6
for (let i = 0; i < totalNumberOfaliens; i++) { //loop will run until 6(number of aliens)
    console.log("%cNumber of active aliens", "font-weight: bold; background: yellow; border: 1px dotted; font-size:15px;");
    let alienSpaceShips = new AlienSpaceShip( // aliens spaceship with properities
        "AlienSpaceships",
        Math.round((Math.random() * (6 - 3)) + 3),
        Math.round((Math.random() * (4 - 2)) + 2),
        (Math.random() * (0.8 - 0.6)) + 0.6
    );
    aliveAlien.push(alienSpaceShips); // after each iteration, alienSpaceShips will push to aliveAlien array. till 6.
}

const spaceBattleShip = new UssSpaceShip("USS_Schwarzenegger"); // invoke the UssSpaceship with properties

const alienSpaceShips1 = new AlienSpaceShip("AlienSpaceships1"); //// invoke the AlienSpacehips with properties
const alienSpaceShips2 = new AlienSpaceShip("AlienSpaceships2");
const alienSpaceShips3 = new AlienSpaceShip("AlienSpaceships3");
const alienSpaceShips4 = new AlienSpaceShip("AlienSpaceships4");
const alienSpaceShips5 = new AlienSpaceShip("AlienSpaceships5");
const alienSpaceShips6 = new AlienSpaceShip("AlienSpaceships6");
console.log(spaceBattleShip);
console.log(alienSpaceShips1);


const enemyBase = [alienSpaceShips1, alienSpaceShips2, alienSpaceShips3, alienSpaceShips4, alienSpaceShips5, alienSpaceShips6];
let target = enemyBase;

let war = (target, target1) => { // war battle between UssSpaceShip vs AlienSpaceShip
    while (target.hull && target1.hull) { //loop will continue till hull<0
        target.attack(target1);
        if (target1.hull) {
            target1.attack(target);
        }
    }
}

while (enemyBase.length > 0) { //it will take each destroyed alienship from array
    war(target, enemyBase.pop());
}


console.log("%c Game is over!", "font-weight: bold; background: red; border: 1px dotted ; font-size:30px;");

console.log("%cWant to play again, please refresh the page", "font-weight: bold; background: lightgreen; border: 1px dotted ; font-size:30px;");