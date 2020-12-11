
/*for loop*/
for(var a=10; a>0; a--){
console.log(a);
}
/*while loop*/

let s=0;
while (s<10) {
console.log(s);
s++;
}
/*do while*/
let i=0;
do {
    i++;
  console.log(i);

}while (i<10)

//
const increaseByTwo = [1, 2, 3, 4, 5];

for (let i = 0; i < increaseByTwo.length; i++{

  increaseByTwo[i] = increaseByTwo[i] + 2;     //increaseByTwo[i] += 2;
//increasing elements of array by two
}

console.log(increaseByTwo);
//**********************

const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];

const bios = [];

//loop will itirate index of firstName,lastName and places and push to bios array
for (let i = 0; i < firstNames.length; i++) {
  bios.push('My name is ' + firstNames[i] +' '+ lastNames[i] + ' and I am from ' + places[i])
}
console.log(bios);
//**************************


const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};
// ADD CODE HERE
for (let i = 0; i < possibleIterable.length; i++) {//loop array index till length of array
   if (possibleIterable[i] % 3 === 0){ //divisible 3
       divByThree[possibleIterable[i]] = i
   }//add the elements of the array to the object you would need to add them as properties to the object

}console.log(divByThree);

// *************************

const sumMe = {
  hello: 'there',
  you: 8,
  are: 7,
  almost: '10',
  done: '!'
};
let total = 0;
// ADD CODE HERE

for (let ank in sumMe ) {//variable in object ank
  if (typeof(sumMe[ank]) == "number") {//typeof checks whats type of variable
    total += sumMe[ank]//assign sumMe[ank] to total
  }}
