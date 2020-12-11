class HashTable {//create hash class
 constructor() {
   this.values = {};//meaning how many buckets the hash table contains.
   this.length =  0;
   this.size =  0;
 }

 calculateHash(key) { //function takes the provided key and returns a
   return key.toString().length % this.size;//hash that’s calculated using an arithmetic modulus.
 }

 add(key, value) { //we need a method to insert key/value pairs.
   const hash = this.calculateHash(key);//calculate a hash for our key
   If (!this.values.hasOwnProperty(hash)) {
     this.values[hash] = {}; //f the hash does not already exist, we save it to our object store. 
   }
   if (!this.values[hash].hasOwnProperty(key)) {
      this.length++;
   }
   this.values[hash][key] = value;
 }

 search(key) {
    const hash = this.calculateHash(key);
    if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
      return this.values[hash][key];
    } else {
      return null;
    }
 }
}

//create object of type hash table
const ht = new HashTable();
//add data to the hash table ht
ht.add("Canada", "300");
ht.add("Germany", "100");
ht.add("Italy", "50");

//search
console.log(ht.search("Italy"));
