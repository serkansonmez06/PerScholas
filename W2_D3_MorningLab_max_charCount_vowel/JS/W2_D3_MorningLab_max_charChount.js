/* 1- Write a function maxOfTwoNumbers that takes two numbers as
arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
Do some googling to figure this out if you forget how conditionals work.*/

 function maxOfTwoNumbers(a,b){
  if (a>b) {
     return a;
  }else if (b>a){
     return b;
  }
}console.log(maxOfTwoNumbers(199,21));

/*2- Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.*/

function maxOfThree(a,b,c) {
  if (a>b && a>c) {
    return a;
  }else if(b>a && b>c){
    return b;
  }else if (c>a && c>b) {
     return c;
  }
}console.log(maxOfThree(15,19,10));

/*3-Write a function isCharacterAVowel that takes a character (i.e. a string of length 1)
 and returns true if it is a vowel, false otherwise*/

 function isCharacterAVowel(x) {
   if (x == 'a' || x=='A' ||  x=='E'  || x =='e'
   ||  x=='O' || x =='o' ||x =='U' || x =='u') {
     return 'vowel';
   }else {
     return 'consonant';
   }
 }console.log(isCharacterAVowel('P'));

 /*4- Write a function charCount that takes a string and returns the length of the string.*/

function charCount(word){
  return word.length;
}console.log(charCount("Boston"));


 /*5-Write a function vowelCount that takes a String and returns the
 number of vowels in the String. add a check for the string to be of 10 or less characteers*/


 function countVowel(str) {
   if (str.length<=10) {
     const count = str.match(/[aeiou]/gi).length;
     return count;
   }else {
     return "please input less than 10 character"
   }

 }console.log(countVowel("serkansonmez"));
