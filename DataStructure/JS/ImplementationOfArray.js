class Array{      // define a class Array, it needs to be with constructor. this is the clas syntax
      constructor(){
        this.length=0; //define length and add this. this refers to object it belongs to.
        this.data={}; //samething with data. this will refer to owner of subject.
      }
      getElementAtIndex(index){  //able to get index of Array. return will give us what index of data
                                 // [] will get data from this.data and give us index of it.
        return this.data[index];
      }
      push(element){ // Push adds element to at the end of Array. //unshift will add items at the beginning of array
        this.data[this.length]=element;//length of the array will increment it with push
        this.length++;
        return this.length; // new lenght of the data
      }
      pop(){  // Pop removes last elements of Array
        const item= this.data[this.length-1];
        delete this.data[this.length-1]; // lenght of the item - 1 will give us last index of Array
        this.length--; //when we decremented it will pop last element of Array
        return this.data; // new data will be minus one item(element)
      }
      deleteAt(index){
        for(let i=index; i<this.length-1;i++){ //for loop will add i + plus in each itirretion starts from index of array which is 0
          this.data[i]=this.data[i+1]; //and till last element of array. number of array will increase by +1
        }
        delete this.data[this.length-1];
        this.length--;  //lenght-1 (last element of array decrease -- return will be minus 1 from data)
        return this.data;
      }
      insertAt(item, index){ //we will insert element in certain index. we can do that with array.splice(index,deleted num, elements)
        for(let i=this.length;i>=index;i--){
          this.data[i]=this.data[i-1];
        }
        this.data[index]=item;
        this.length++;
        return this.data;
      }
    }
    const array= new Array(); //we are instantiating an object of Array class
    array.push(12);
    array.push(13); //pushing element
    array.push(14); //will be deleting 14
    array.push(10);
    array.push(989); //Popping element 989
    //will Inserting element 456
    //Inserting element 456
    document.write("<div>Print element in an array</div>"); //The write() method writes HTML/JavaScript expressions code to a document.
    for(var key in array.data){
      document.write("<span>"+array.data[key]+" "+"</span>");
    }

    document.write("<div>Pop element in an array</div>");
    array.pop(); //Popping element 989
    for(var key in array.data){//for in loop only iterates over enumerable, non-Symbol properties.
       //It is most practically used for debugging purposes,
      // easy way to check the properties of an object.
      document.write("<span>"+array.data[key]+" "+"</span>");
    }
    
    document.write("<div>Inserting element at position 2</div>");
    array.insertAt(456, 2); //Inserting element 456
    for(var key in array.data){
      document.write("<span>"+array.data[key]+" "+"</span>");
    }

    document.write("<div>deleting element at position 3</div>");
    array.deleteAt(3); //Deleting 14
    for(var key in array.data){
      document.write("<span>"+array.data[key]+" "+"</span>");
    }

    document.write("<div>Getting  element at position 2</div>");
    document.write("<div>"+array.getElementAtIndex(2)+"</div>");
