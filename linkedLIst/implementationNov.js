class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if(this.length === 0) {
            return undefined;
        } 
        let popped 
        if (this.length === 1) {
            popped = this.head.value;
            this.head = this.tail = null;
        } else {
            let current = this.head;
            while(current.next.next) {
                current = current.next;
            }
            popped = current.next.value;
            current.next = null;
            this.tail = current;
        }
            this.length--;
            return popped;
    }
    unshift(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    shift() {
        if(this.length === 0) {
            return undefined;
        } 
        let popped 
        if (this.length === 1) {
            popped = this.head.value;
            this.head = this.tail = null;
        } else {
            popped = this.head.value;
            this.head = this.head.next;
        }
            this.length--;
            return popped;
    }
    get(index) {
        if(index < 0 || index >= this.length) {
            return null;
        } else  {
            let count = 0; 
            let current = this.head;
            while(index !==count) {
                current = current.next;
                count++
            } 
            return current;
        }
    }
    set(index,value){
        let node = this.get(index);

        if (node) {
            node.value = value;
            return true;
        } else {
            return false;
        }
    }
    insert(index, value) {
        if(index < 0 || index >this.length) {
            return false;
        } else if(index === 0) {
            this.unshift(value);
            return true;
        } else if (index === this.length) {
            this.push(value);
            return true;
        } else {
            let newNode = new Node(value);
            let previous = this.get(index-1);
            newNode.next = previous.next;
            previous.next = newNode;
            this.length++;
            return true;   
        }
    }
    remove(index) {

        let popped ;

        //1. Reject if index is negative or out of bound entirely.
        if(index < 0 || index >=this.length) {
            return undefined;
        } else if(index === 0) {
            popped =this.shift();
        } else if (index === this.length - 1) { //2. Trigger pop() on the last index;
            popped = this.pop();
        } else {
            let previous = this.get(index-1);
            popped = previous.next.value;
            previous.next = previous.next.next;
            this.length--;
              
        }
        return popped;
    }
    reverse() {
        //1. Swap manager's head and tail pointers.
        let current = this.head;
        this.head = this.tail
        this.tail = current;

        //2. Initialize the helper pointers.
        let prev = null; // The new tail will eventually point to null.
        let nextNode  = null; // Temperory place holder

        //3. Loop through the entire list. 
        for(let i = 0; i < this.length; i++){
            nextNode = current.next; // STEP A: SAVE the  future! (Save current.next into nextNode)
            current.next = prev; //STEP B: FLIP the pointer! (Set current.next to prev)
            prev = current; //STEP C: MOVE prev forward! (Set prev to current)
            current = nextNode; // STEP D: MOVE current forward! (Set current to nextNode);
        }
        return this;
    }

}