
// function addThreeNum(a,b,c){
//   return a+b+c;
// }console.log(addThreeNum(2,3,3));

// addThreeNum=(a,b,c)=>a+b+c;
// console.log(addThreeNum(5,4,4));
/**cookie cost $4 & paid $10. write a loop says how many quarters he got
paid 2 dollars instead of 4 dollars*/
// var change=[];
// var cookie=16;
// while (cookie<40) {
//   cookie++;
// change.push(cookie/4);
// }console.log(change);
// console.log("Number of quarters = " + change.length);
// function vending(bill,cookie){
//   var ven=[];
//
//  change=(bill-cookie);
//
//   return ven.push(change);
//
// }console.log(vending(3,1));
// function vendingMachine(cookie,bill){
//   var change=[];
//   while (cookie<bill) {
//     cookie++;
//   change.push(cookie);
//
// }console.log("Number of quarters = " + change.length)
// }
// console.log(vendingMachine(16,80));
// setTimeout( ()=>{
//   console.log('hi');
// },5000);



//   function charactersOccurencesCount(stringToCount) {
//   var characters = {};
//   // replacing all Capitals by Lowercase letters and removing spaces
//   var stringToCount = stringToCount.toLowerCase().replace(/\s/g, '');
//   stringToCount.split("").forEach(function(l){
//     characters[l] = (isNaN(characters[l]) ? 1 : characters[l] + 1);
//   });
//   return characters;
// }console.log(charactersOccurencesCount("serkan"));





// var patt = /e/;
//
// console.log(patt.test("The best things in life are free!"));



function filterLongWords(stringArray, number){
    var newArray = [];
    var count=0;
    console.log(stringArray.length);
    for (i=0; i<stringArray.length; i++){
      if(stringArray[i].length>number){
        newArray[count]=stringArray[i];
        count++; // it iterates each count by one
                 //  that's how it check every count( which new array and unknow lenght)
             // 3 elements are greater and 5, count ++ will check that three elements.
      }
    }
    return newArray;
  }
  //calling from main
  var myArray= ["one", "twenty", "some amount","two", "some billions"];
  var myNewArray=filterLongWords(myArray, 5);
  console.log(myNewArray);
