function Queue() {
   this.elements = [];
}//constructor function uses an array to store its elements.

Queue.prototype.enqueue = function (e) {
   this.elements.push(e);//ethod of the array object to insert the new element at the end of the queue.
}; //method adds an element at the end of the queue


Queue.prototype.dequeue = function () {
    return this.elements.shift();// remove an element from the front of the queue
};

Queue.prototype.isEmpty = function () {
    return this.elements.length == 0;// check if the queue is empty
};

// get the element at the front of the queue
Queue.prototype.peek = function () {//method accesses the element at the front of the queue without modifying it.
    return !this.isEmpty() ? this.elements[0] : undefined;
};

Queue.prototype.length = function() {
    return this.elements.length;//length of a queue
}

// dequeue all elements
while (!q.isEmpty()) {
    console.log(q.dequeue());

}
// get the current length of queue
console.log(q.length()); // 7

// get the current item at the front of the queue
console.log(q.peek()); // 1
