const { LLData } = require("./LLData");

exports.LList = class {
  head = null;
  tail = null;

  getFirst() {
    return this.head;
  }
  getLast() {
    return this.tail;
  }
  add(value) {
    const node = new LLData(value);
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
  }
  addFromArray(arrayOfData) {
    arrayOfData.map((item) => this.add(item));
  }
  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current.data;
      current = current.next;
    }
  }
  result = this[Symbol.iterator]();
  next() {
    return this.result.next();
  }
  getIterator() {
    return this[Symbol.iterator]();
  }
  remove(value){
    if(!this.head){
      return false;
    }    
    if(this.head.data === value) {
      this.head = this.head.next;
      return true;
    }
    let currentNode = this.head;
      while(currentNode.next){
        if(currentNode.next.data === value){
          if(currentNode.next === this.tail) {
            this.tail = currentNode;
          }
        currentNode.next = currentNode.next.next;
        return true;
      }else{
           currentNode = currentNode.next;
      }
    }
    return false;
  }
  removeAll(value) {
    do {} while(this.remove(value));
  }
  contains(value){
    if(!this.head){
      return null;
    }
    let currentNode = this.head;
    while(currentNode){
      if(value !== undefined && currentNode.data === value){
        return true
      }
      currentNode = currentNode.next;
    }
    return false
  }
  clear(){
    this.head = null;
    this.tail = null;
  }
  count(){
    let count = 0;
    let currentNode = this.head;
    while(currentNode){
      currentNode = currentNode.next;
      count++;
    }
    return count
  }
  toString(){
    let nodes = [];
    let currentNode = this.head
    while(currentNode){
      nodes.push(currentNode.data)
      currentNode = currentNode.next;
    }
    return nodes.join(', ');
  }
  filter(callback){
    let newList = Object.assign(Object.create(this), JSON.parse(JSON.stringify(this)))
      let currentNode = newList.head
      while(currentNode){
        if(!callback(currentNode.data)){
          newList.remove(currentNode.data)
        }
        currentNode = currentNode.next;
      }
    return newList
  }
}

//------TEST----//

// const {LList} = require('./LList');

// const list = new LList();

// list.addFromArray([100, 1, 2, 3, 100, 4, 5, 100]);

// list.add(10);

// const onlySmallList = list.filter((data) => {
//      return data < 18
// });

// let sumOfAll = 0;

// for(const data of list){
//     sumOfAll += data;
// }

// console.log([...list]) // [ 100, 1, 2, 3, 100, 4, 5, 100]
// console.log([...onlySmallList]) // [ 1, 2, 3, 4, 5, 10]
// console.log(sumOfAll) // 325
// console.log(list.contains(10)) // true
// console.log(list.contains(22)) // false

// list.clear();

// console.log([...list]) // []

// console.log(list.toString());
// console.log(list)
// console.log(list.count())

// list.remove(100)
// list.removeAll(100)




// console.log(list.next())
// console.log(list.next())
// console.log(list.next())
// console.log(list.next())
// console.log(list.next())
// console.log(list.next())
// console.log(list.next())
// console.log(list.next())
// console.log(list.next())
// console.log(list.next())