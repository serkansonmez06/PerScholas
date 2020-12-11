// creating object for stack class
var stack = new Stack();

// testing isEmpty (it is boolean ) and pop on an empty stack

// returns false
console.log(stack.isEmpty());

// Adding element to the stack
stack.push(10);
stack.push(20);
stack.push(30);

// Printing the stack element
// prints [10, 20, 30]
console.log(stack.printStack());

// returns 30
console.log(stack.peek());

// returns 30 and remove it from stack
console.log(stack.pop());

// returns [10, 20]
console.log(stack.printStack());

// //***************************

// Performs Postfix Evaluation on a given exp
function reverse(str) {
    let stack = [];
    // push letter into stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    // pop letter from the stack
    let reverseStr = '';
    while (stack.length > 0) {
        reverseStr += stack.pop();
    }
    return reverseStr;
}
console.log(reverse('zemnoS nakreS'));//Serkan Sonmez
//********************

class Stack {
    constructor(){
        this.data = [];
        this.top = 0;
    }
    push(element) { //adds elements to stack at top
      this.data[this.top] = element;
      this.top = this.top + 1;
    }
   length() { //Return the length of the stack.
      return this.top;
   }
   peek() { //Get the top element of the stack.
      return this.data[this.top-1];
   }
   isEmpty() {
     return this.top === 0;
   }
   pop() {
    if( this.isEmpty() === false ) {//Check if the stack is empty.
       this.top = this.top -1;
       return this.data.pop(); // removes the last element
     }
   }
   print() { //Print the elements of the stack.
      var top = this.top - 1; // because top points to index where new    element to be inserted
      while(top >= 0) { // print upto 0th index
          console.log(this.data[top]);
           top--;
       }
    }
    reverse() { //To print the stack in reverse order,
       this._reverse(this.top - 1 );
    }
    _reverse(index) {
       if(index != 0) {
          this._reverse(index-1);
       }
       console.log(this.data[index]);
    }
}
