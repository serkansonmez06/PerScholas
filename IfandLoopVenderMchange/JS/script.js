// /*Use an if statement to check if num is greater than 100.
// If num is greater than 100, reassign the value of final to null.
// Otherwise, set final to be two times the value of num.*/

const num = 40;
let final;
if(num>100){
  final=null;
  console.log(final)
}else{
  final=2*num;
  console.log(final)
}


 /*fizzbuzz challenge*/
const
fb = [];
for(var i=1; i<17; i++){

  if(i%5===0 && i%3===0){
    fb.push("fizzbuzz");
  }
  else if(i%5===0){
    fb.push("buzz");
  }
  else if(i%3===0){
    fb.push("fizz");
  }else {
    fb.push(i);
  }
}console.log(fb);


// // /*cookie cost $4 & paid $10. write a loop says how many quarters he got*/

var change=[];
var cookie=16;
while (cookie<40) {
  cookie++;
change.push(cookie/4); /* push every change in array after dividing 4.each quarters equal to a dollar= dollar has 4 quarters*/
}console.log(change);
console.log("Number of quarters = " + change.length); /* change array length will give us how many change in array*/


/* cookie cost $2 & paid $20. write a loop says how many quarters he got - WhileLoop*/
var change=[];
var cookie=0;
var bill=0;
function vendingManchine(bill,cookie){

  while(cookie<bill){
    cookie++;
    change.push(cookie/4);

  }  return change;
}console.log(vendingManchine(80,8));
console.log("Number of quarters = " + change.length);
// W2_D2_AL
