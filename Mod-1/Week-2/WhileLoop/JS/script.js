// /*1-Using a while loop, print out all prime numbers between 0 - 20*/
console.log("Print Prime Numbers");
var i=0;
while (i<20) {
  if(i%2 ===1 && i%3 && i!=1)
  console.log(i);
  if (i==2)
  console.log(i);
  if(i==3)

  console.log(i);
  i++;
}
console.log("========================");
// /*2-Use a while loop to add up the numbers 1 to 20 into one variable.
// Print out the sum at the end*/
var i=1;
var sum=0;
while (i<=20) {
  sum=sum+i;
  console.log(i);
  i++;
}console.log(sum);
// /*3-Use a while loop to print out the even number from 1 to 20.
// (You'll need Modulus for this. And an IF Statement.)*/
var i=1;
while (i<20) {
  if(i%2==1)
  console.log(i);
  i++;
}
console.log("========================");
// /*CSX Use a while loop to increment count by 2 on each repetition of the block of code.
//  Run the code block of your while loop until count is 8.*/
 let count = 2;
while(count<8){
  console.log(count);
  count+=2;
}
console.log("========================");
// /*CSX Initialize a variable addThis to 0 and a variable sum to 0.
//  Use a while loop to repeat a code block as long as addThis is less than 10.
//  In the code block, add the value of addThis to sum, then increment addThis by 1.
//   After the while loop runs, the value of sum should be the sum of the numbers 0 through 9.*/
var addThis=0;
var sum=0;
while(addThis<10){
  sum=addThis+sum;
  console.log(addThis);
  console.log(sum);
  addThis++;
}
