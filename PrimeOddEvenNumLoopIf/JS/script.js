// /*  1-)exercise Print Odd Number*/
console.log('Print ODD Number');
for(let i=1; i<10;i+=2){
  console.log(i);
}

// /*Even Number node W2_D1_AfternoonLab.js   */
console.log('Print EVEN Number ');
for(let x=1; x<=10;x+=1){
  x++;
  console.log(x);
}
console.log('Print EVEN Number');
for(let y=1; y<=10;y+=2){
  console.log(y+1);
}
// /*Print EVEN numbers between 0 to 10*/
console.log('Print EVEN Number');
for( var s=0;s<11; s+=2){
  console.log(s);
}
// /*Print EVEN numbers between 0 to 10 use remainder*/
console.log('Print EVEN Number');
for( var f=0;f<10; f++){
  if(f%2 ===0){
  console.log(f);
}}
// /* 2-) exercise Print PRIME numbers between 0 to 20 */
for(let w=1; w<20; w+=1){
  if(w%2 ===1 && w%3 && w!=1){
console.log('PRIME and ODD= '+w);
}else if (w===2) {
  console.log('PRIME and EVEN= '+w);
}else if(w===3){
  console.log('PRIME and ODD= '+w);
}else if(w%2 ===0){
  console.log('EVEN = '+w);
}else if(w%2 ===1 ) {
  console.log('ODD = '+w);
}}

for (let x = 1; x < 20; x++) {
  if(x > 1){
    if(x == 2 || x == 3){
      console.log(x);
     }else if(x % 2 && x % 3){
      console.log(x);
    }
  }
}

/*print mupliples 3 betweeen 6 to 60*/
for (let g=6;g<60;g+=3){
  console.log(g);
}
for (var i = 6; i <= 60; i++){ 
  if (i%3 === 0) 
   console.log(i); 
 }
// W2_D1_AfternoonLab
