var num = 5;
var arr = [1,2,3,4,6,7,8];
var found = false;
for(var i=0; i<arr.length; i++){
  if(arr[i]==num){
    console.log("Found");
    found = true;
  }
}
if (found == false){
 console.log("Not Found");
}


var toFind = 4;
var arr = [1,2,3,4,5,6,7,8,9,10];

var firstIndex = 0;
var lastIndex = arr.length-1;
var midIndex=0;
var found = false;


  while (firstIndex <= lastIndex ) {
  midIndex = parseInt((firstIndex+lastIndex)/2);
  midIndex = (firstIndex+lastIndex)/2; //first we find mid value in array
  if(arr[midIndex] == toFind){
     found = true;
     console.log("Found");
     break;
  }else if(arr[midIndex] < toFind){
    firstIndex = ++midIndex ;
  }else{
    lastIndex = --midIndex;
  }
}

if(found == false){
  console.log("not found");
}
