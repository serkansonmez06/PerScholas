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
//******************************* UssSpaceShip vs  alienSpaceShip */

console.log("%c Game will start 3.2.1!", "font-weight: bold; background: lightgreen; border: 1px dotted; font-size:30px;");

class SpaceShip { // class properties with constructor
    constructor(name, hull, firepower, accuracy) {
        this.name = name; //name of the spacehip
        this.hull = hull; // num of life
        this.firepower = firepower; // num of power
        this.accuracy = accuracy; // num of accurancy between 0 to 1
    }
}
let UssSpaceShip = new SpaceShip('UssSpaceShip', 20, 5, .7) // predefine properties
console.log(UssSpaceShip);

const enemyBase = []; // array will store each alien.
for (let i = 1; i < 6; i++) { // there are 6 six aliens. requirment
    let alienHull = Math.floor(Math.random() * 6) + 3;
    let alienFirePower = Math.floor(Math.random() * 4) + 2;
    let alienAccuracy = Math.floor(Math.random() * .8) + .6;
    let alienSpaceShip = new SpaceShip('AlienSpaceShip', alienHull, alienFirePower, alienAccuracy)
    enemyBase.push(alienSpaceShip); //after each loop it will push every alien to array
};
console.log(enemyBase);

while (enemyBase.length > 0) { // war battle will go till num of alien is 0

    let activeAlien = enemyBase.pop(); //it will take each alien after defeated from array
    if (Math.random() < activeAlien.accuracy) { // if this condition works alien accurancy is pre define range
        console.log("%c We've been hit!", "font-weight: bold; background: green; border: 1px dotted; font-size:30px;"); // print this
        UssSpaceShip.hull = UssSpaceShip.hull - activeAlien.firepower; // each fire will decrease hull
        console.log("%c UssSpaceShip hull - " + UssSpaceShip.hull, "font-weight: bold; background: purple; border: 1px dotted; font-size:30px;"); // print hull num
    } else if (Math.random() > activeAlien.accuracy) {
        console.log("%c Direct hit! " + UssSpaceShip.firepower + "damage!", "font-weight: bold; background: orange; border: 1px dotted; font-size:30px;");
        console.log("%c UssSpaceShip Remaining Hull" + (activeAlien.hull - UssSpaceShip.firepower), "font-weight: bold; background: orange; border: 1px dotted; font-size:30px;");
    }
    console.log("%c NoMore Aliens! Well DoNE", "font-weight: bold; background: black; border: 1px dotted; font-size:30px;");
    if (UssSpaceShip.hull <= 0) { //if hull is below 0 then game is over
        console.log("%c you can try again", "font-weight: bold; background: red; border: 1px dotted; font-size:30px;");
        break;
    };

    if (UssSpaceShip.hull > 0 && enemyBase.length == 0) { //player wins
        console.log("%c We knew YOu could save us! great", "font-weight: bold; background: lightgreen; border: 1px dotted; font-size:30px;");
    }
}

console.log("%c Game is over!", "font-weight: bold; background: red; border: 1px dotted ; font-size:30px;");

console.log("%cWant to play again, please refresh the page", "font-weight: bold; background: lightgreen; border: 1px dotted ; font-size:30px;");