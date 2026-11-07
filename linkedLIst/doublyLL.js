class Node {
    constructor(value) {
        this.next = null;
        this.prev = null;
        this.value = value
    }
}

class DoublyLinkedLIst{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value ) {
        const newNode = new Node(value); //1. Create the newNode

        if (!this.head) { //2. If the list is empty : point the head and tail  to newNode
            this.head= this.tail = newNode;
        } else {//3.-
            this.tail.next = newNode;   // - Point the current tail's next to newNode
            newNode.prev = this.tail; // - Point the newNode's preve back to the current tail (NEW!)
            this.tail = newNode; //- Update the manager's tail pointer to the newNode
        }
        this.length++; //4. Increment length and return this
        return this;
    }
    pop() {
        
        if (!this.length) return undefined; // 1. If there is no head , return undefined
    
        let popped = this.tail; // 2. Store the current tail in a variable to return later

        if (this.length ===1) { //3. If length is 1-
            this.head= this.tail = null;  // - Set head and tail to null
        } else { //4. Otherwise (length > 1):
            this.tail = popped.prev; //- Update the manager's tail pointer to the current tail's prev
            popped.next = null; //- Sever the forward connection: set the NEW tail's next to null
            this.tail.next = null; //- Sever the backward connecdtion: set the popped node's prev to null
        }
        this.length--; //5. Decrement the length
        return popped; //6. Return the popped Node (converntion : because the so the garbage collector cleans it up)
    } 
    unshift(value) {
        const newNode = new Node(value);
        if(!this.length) this.push(value);

        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            this.length++;
        }
        return this;
    }
    shift() {
        if(!this.length) return undefined;
        let popped = this.head;

        if(this.length === 1) {
            this.head= this.tail = null;
        } else {
            this.head = popped.next;
            popped.next = null;
            this.head.prev = null;
        }
        this.length--;
        return popped;
    }
    get(index) {
        if(index < 0 || index >=this.length) {
            return null;
        }
        let current;
        let mid = Math.floor(this.length/2);
        if(index < mid) {
            current = this.head;
            let count = 0;
            while(current && count != index) {
                current = current.next;
                count++;
            }
            return current;
        } else if(index >=mid) {
            let count = this.length-1;
            let current = this.tail;
            while(current && count != index) {
                current = current.prev;
                count--;
            }
            return current;
        }
    }
    set(index, value) {
        let node = this.get(index);
        if (node) {
            node.value = value;
            return true;
        } else {
            return false;
        }
    }
    insert(index,value) {
        if(index <0 || index>this.length) return false;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);// !! to strictly coerce a truthy or falsy numeric value into a strict boolean.

         else {
            let newNode = new Node(value);
            let prev = this.get(index-1);
            newNode.prev = prev;
            newNode.next = prev.next;
            prev.next = newNode;
            newNode.next.prev = newNode;
            this.length++
        }
        return true;
    }
    remove(index) {
        if(index < 0 || index >this.length) return false;
        if(index ===0) return this.shift();
        if(index ===this.length-1) return this.pop();

        else {
            let removedNode = this.get(index);

            removedNode.next.prev = removedNode.prev;
            removedNode.prev.next = removedNode.next;

            removedNode.prev = null;
            removedNode.next = null;

            this.length--;
            return removedNode;
        }
        
    }
}


const dLL = new DoublyLinkedLIst();

dLL.push(1).push(2).push(3).push(4).push(5).push(6);

console.log(dLL.get(1));
console.log(dLL.get(4))
dLL.insert(2,7);
console.log(dLL.get(2));
dLL.insert(-1,10);
console.log(dLL.get(0))
dLL.insert(10000,100);
console.log(dLL.get(8))