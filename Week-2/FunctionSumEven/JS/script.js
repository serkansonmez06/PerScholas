var sum;
sum=theSum;
function theSum(x,y){
  return x+y;
};
sum=theSum(10,10);
console.log(sum);
/*node W2_D3_Morning_Function.js*/
function oddEven(x) {
  if(x%2 == 0)
  return "even";
  else {
    return "Odd";
  }
};
/*short version of function ==
 just name of function= and parameter==
 oddEven=()=> */
oddEven=(x)=> {
  if(x%2 == 0)
  return "even";
  else {
    return "Odd";
  }
};
console.log(oddEven(-8));
/*callback*/
const bar = (param1) => {
  console.log("callback start");
  param1();

}
bar( ()=> {
  console.log("function 1");
});
bar( ()=> {
  console.log("function 2");
});

/*Write a function that adds three numbers
and divide the result by 3 in ES5. and try converting the code to
arrow functions.*/
/*ES5 verison*/
function addThreeNum(a,b,c){
  return ((a+b+c)/3);
};
console.log(addThreeNum(6,4,2));
/*ES6 version*/
   addThreeNum=(a,b,c)=> (a+b+c)/3;
   console.log(addThreeNum(8,8,8));
