// /*1-Define a function maxOfTwoNumbers that takes two numbers as
// arguments and returns the largest of them. Use the if-then-else construct
// available in Javascript. Do some googling to figure
// this out if you forget how conditionals work. */
//
//  function maxOfTwoNumbers(a,b){         /* created function with accepts two parameters*/
//   if (a>b) {                            /* created if statement measures if a >b return a */
//      return a;                          /* else a < b return b */
//   }else if (b>a){
//      return b;
//   }
//   }
//   console.log(maxOfTwoNumbers(199,21));  /*  console.log with function two arguments will print out max num */
//
// /*2- Define a function maxOfThree that takes three numbers
// as arguments and returns the largest of them.*/
//
// function maxOfThree(a,b,c) {             /*created function with accepts three parameters */
//   if (a>b && a>c)                        /*if statement measures two condition  if a >b  && a>c return a- if a is bigger than b and c will return a*/
//     return a;
//   }else if(b>a && b>c){                  /*if statement measures two condition  if  b>a  && b>c return b- if b is bigger than a and c will return b*/
//     return b;
//   }else if (c>a && c>b) {                /*if statement measures two condition  if c>a  && c>b return a- if c is bigger than b and a will return c*/
//      return c;
//   }
// }console.log(maxOfThree(15,19,10));       /*console.log with function three arguments will print out max num */
//
// /* 3- Write a function isCharacterAVowel that takes a character
// (i.e. a string of length 1) and
// returns true if it is a vowel, false otherwise.*/
//
// function isCharacterAVowel(x) {                      /* created a function accepts a parameter*/
//   if (x == 'a' || x=='A' ||  x=='E'  || x =='e'
//   ||  x=='O' || x =='o' ||x =='U' || x =='u') {      /* parameter must be equal to vowels in else is consonant */
//     return 'vowel';
//   }else {
//     return 'consonant';
//   }
// }console.log(isCharacterAVowel('P'));              /*console.log with function a argument will print if equal to vowels */
//
//
// /* 4- Define a function sumArray and a function multiplyArray
// that sums and multiplies (respectively) all the numbers in
//  an array of numbers. For
// example, sumArray([1,2,3,4]) should return 10,
//  and multiplyArray([1,2,3,4]) should return 24.*/
//
// /*a-1*/
//  function sumArray(x) {                           /* created a function with a parameter  */
//  	var sum = 0;
//  	for (var i = 0; i < x.length; i++) {           /* declared a sum equal to 0; which sum will store each i inside the loop*/
//  		sum += x[i];                                 /* sumArray is array bc of that sum + equal will be each argument in loop in  */
//  	}
//  	return sum;
//  }
//  console.log(sumArray([5,8]));                    /*a argument with array*/
//
//  /*a-2*/
//
//  function multiplyArray(v){
//    var multiplies=1;
//    for (var i = 0; i <v.length; i++) {
//     multiplies*=v[i];
//   }return multiplies;
// }console.log(multiplyArray([2,4,6]));
//
//
// /* 5- Write a function that returns the number of arguments passed to the
// function when called.*/
//
// function k(a){
//
//   var sum=0;
//   for (var i = 0; i < a.length; i++) {
//     sum+=a[i]
//   }return sum;
// }console.log(k([3,54,4,4]));
//
// /* 6- Define a function reverseString that computes the reversal of a string.
// For example, reverseString("jag testar") should return the string "ratset gaj".*/
//
// function reverseString(input){
//  var word="";                                /*will store each letter*/
//  for( var i=input.length-1; i>=0; i--)      /*decrement it bc it from highest to lowest- means last char of word*/
//  word+=input[i];                            /* store each itiration */
//   return word;
// }console.log(reverseString("SerkaN"));
//
// /* 7- Write a function findLongestWord that takes an array of
//  words and returns the length of the longest one.*/
//
// function findLongestWord(word){
//   var longestWord=word.split(' ').sort(function(a, b)
//   {
//     return b.length-a.length; });                       /*split strings object into an array of array by separeting by string to string*/
//     return longestWord[0].length;                       /*sort method compares each items in array thats why return measures a.length and b.length*/
//   }
//    console.log(findLongestWord("Welcome to Per Scholas "));
//
// /* 8- Write a function filterLongWords that takes an array of words and a number i and returns
//   the array of words that are longer than i characters long.*/
//
//   function filterLongWords (array,num) {
//     newWord = [];                               /*create function and declare new array that will store the return*/
//     for (var i = 0; i < array.length; i++) {    /*for loop will go on till entered array data length */
//       if(array[i].length > num){                /* if entered array is > than entered num it will print */
//         newWord.push(array[i]);                 /*and push to the newWord with data collected from entered array*/
//       }
//     }
//     return newWord;                             /*return newWord array and printed */
//   }console.log(filterLongWords(["Boston", "MA", "America","Ankara"],3)); /*entered data*/

/* Bonus 1-Add a method reverseString (from question 6) to the object String so
that it is possible to call: "Per Scholas".reverseString().*/

function reverseString(input){

// console.log(typeof this);

 var word="";                                /*will store each letter*/
 for( var i=this.length-1; i>=0; i--)      /*decrement it bc it from highest to lowest- means last char of word*/
 word+=this[i];
 // console.log(word);                         /* store each itiration */
  return word;
}

// console.log(reverseString("Serkan"));
var it=[2,3,5];
String.prototype.reverse= reverseString // added method reverseString
Array.prototype.reverse=reverseString    
console.log("Per Scholas".reverse());
console.log(it.reverse());
Math.random()

/* Bonus 1- Write a function that takes a string as argument and returns an object where:
         a-the keys are the characters that occur in the string
         b-the values are the number of occurrences for each letter, regardless of the case*/
