class Node {
  constructor(data, next = null) { //the constructor has the
    //responsibility to initialize the two properties: data and next.
    this.data = data;
    this.next = next;
  }
}

//Let's create four nodes
let node1 = new Node(5); //we have to instantiate four times the Node
let node2 = new Node(10); // class in order to create the four nodes.
let node3 = new Node(20);
let node4 = new Node(1);

//connecting nodes
node1.next = node2;
node2.next = node3;
node3.next = node4;

//LinkedList Class
class LinkedList {
  constructor() {
    this.head = null; //first node of the Linked List
    this.size = 0; //Track size of the linked list
  }
  //Insert to head
  insertToHead(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //Insert into the tail
  insertToTail(data) {
    const node = new Node(data);
    let tail = null;
    //if empty, make it head
    if (!this.head) {
      this.head = node;
    } else {
      tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = node;
    }
    this.size++;
  }

  //Insert at random position
  insertAt(data, index) {
    //if it's empty
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    //if it needs add to the front of the list
    if (index === 0) {
      this.insertToHead(data); //reuse insertToHead function
      return;
    }
    let node = new Node(data);
    let current, previous;
    let count = 0;
    // current will be first
    current = this.head;
    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }
}

const linkedList = new LinkedList();
linkedList.insertToHead(100);
linkedList.insertToHead(200);
linkedList.insertToHead(300);
linkedList.insertToTail(400);
linkedList.insertAt(600, 2);

console.table(linkedList);
