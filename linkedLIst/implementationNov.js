class Node {
    constructor(value) {
        this.value = value;
        this.next = null; // By default, it point to nothing
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Add n new node to the END of th list
    push(value) {
        const newNode = new Node(value);

        if(!this.head) {
            // 1. If the list is empty. Point Both head and tail to the newNode
            this.head = this.tail = newNode;
        } else {
            // 2. Otherwise, tell the current tail's 'next' point to conect to the newNode
            this.tail.next = newNode;
            // 3. Update the manager's tail pointer to officially be the newNode
            this.tail = newNode;
        }
        // 4. Increment Length
        this.length++;
        // 5. Return the list instance (this)
        return this;
    }
    pop() {
        if (this.length === 0) return undefined;

        let current = this.head;
        let newTail = current;

        // Loop until we reach the very last node
        while (current.next) {
            newTail = current;       // newTail always stays one step behind
            current = current.next;  // current moves to the end
        }

        this.tail = newTail;         // 1. Update the manager's tail pointer
        this.tail.next = null;       // 2. Sever the physical link to the last node
        this.length--;

        // Edge case: if we just popped the only node, reset head and tail
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current; // Return the removed node
    }
    
    // Add to the front
    unshift(value) {
        const newNode = new Node(value);

        // 1. If empty, point head and tail to newNode
        if(!this.head) {
            this.head = this.tail = newNode;
        } else { // 2. Otherwise, point newNode.next to the current head
            newNode.next = this.head;
            // 3.  Update the head pointer to be newNode
            this.head = newNode;
        }
        // 4. Increment length
        this.length++;
        return this;
    }
    shift() {
        // If empty return undefined
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
        // 1. If index is less than 0 or greater than/ euqal to this.length, return null
        if(index < 0 || index >= this.length) {
            return null;
        } else  {
            // 2. Create a counter start at 0
            let count = 0; 
            // 3. Create a current variable starting at this.head
            let current = this.head;
            // 4. Loop while counter !== index, moving current to current.next
            while(index !==count) {
                current = current.next;
                count++
            } 
            // 5. Return the current node
            return current;
        }
    }
    set(index,value){
        // 1. Use your get() method to find the specific node
        let node = this.get(index);
        // 2. If the node is found, update its value and return true
        if (node) {
            node.value = value;
            return true;
        } else {
            // 3. If th enode is not found, return false
            return false;
        }
    }
    insert(index, value) {
        // 1. If index  < 0 or index > this.length, return false
        if(index < 0 || index >this.length) {
            return false;
        }
        // 2. If index === 0, use your unshift method. (Return true)
         else if(index === 0) {
            this.unshift(value);
            return true;
        }
        // 3. If index === this.length, use your push method. (Return true)
         else if (index === this.length) {
            this.push(value);
            return true;
        }
        // 4. Otherwise, create the newNode
        else {
            let newNode = new Node(value);
            // 5. Use get(index-1) to find the node BEFORE  the insertion point
            let previous = this.get(index-1);
            // 6. Set newNode. nexst to piont ot the previours node's next
            newNode.next = previous.next;
            // 7. Set the previouse node's next to poin to the newNode
            previous.next = newNode;
            // 8. Increment the length and return true
            this.length++;
            return true;   
        }
    }
    remove(index) {

        let popped ;

        //1. Reject if index is negative or out of bound entirely.
        if(index < 0 || index >=this.length) {
            return undefined; // Usually we reutrn undefinde for invalid removals
        } else if(index === 0) {
            popped =this.shift();
        } else if (index === this.length - 1) { //2. Trigger pop() on the last index;
            popped = this.pop();
        } else {
            let previous = this.get(index-1);
            popped = previous.next.value;
            // Bridge the gap , skipping the removed node
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