// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
      this.value = val;
      this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
      debugger;
      let newNode = new Node(val);
      if (this.length === 0){
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
      debugger;
      let removedNode = this.tail;

      if (this.length === 0){
        return undefined;
      } else if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        let nodeBeforeTail = this.get(this.length - 2);
        this.tail = nodeBeforeTail;
        this.tail.next = null;
      }
      this.length--;
      return removedNode;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
      let newNode = new Node(val);
      if (this.length === 0){
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
          let removedNode = this.head;
          if (this.length === 0){
            return undefined;
          } else if (this.length === 1) {
            this.head = null;
            this.tail = null;
          } else {
            let newHeadNode = this.get(1);
            this.head = newHeadNode;
          }
          this.length--;
          return removedNode;
    }

    // TODO: Implement the contains method here
    contains(target) {
      let theNode = this.head;

      for(let i = 0; i < this.length; i++){
          if (theNode.value === target){
              return true;
          };
          theNode = theNode.next;
      }
      return false;
    }

    // TODO: Implement the get method here
    get(index) {
      if (index > this.length) return null;

      let theNode = this.head;
      for(let i = 0; i <= index - 1; i++){
        theNode = theNode.next;
      }
      return theNode;
    }

    // TODO: Implement the set method here
    set(index, val) {
      if (index >= this.length) return false;

      this.get(index).value = val;
      return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
      if (index >= this.length) return false;

      let previousNode = this.get(index - 1);
      let nextNode = this.get(index);
      let insertedNode = new Node(val);

      previousNode.next = insertedNode;
      insertedNode.next = nextNode;

      this.length++;
      return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
      if (index >= this.length) return undefined;

      let previousNode = this.get(index - 1);
      let nextNode = this.get(index + 1);
      let removedNode = this.get(index);

      previousNode.next = nextNode;
      this.length--;
      return removedNode;
    }

    // TODO: Implement the size method here
    size() {
      return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
