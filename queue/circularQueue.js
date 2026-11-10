class CircularQueue{
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;

        this.head = 0; // Index of the front item
        this.tail = 0; // Index of the NEXT availabel empty slot
    }
    isFull() {
        return this.currentLength === this.capacity;
    }
    isEmpty() {
        return this.currentLength === 0;
    }
    enqueue(value) {
        if (this.isFull()) return false; // Queue is full, cannot add
        // 1. Insert the value at the current tail index
        this.items[this.tail] = value;
        // 2. Move the tail pionter forward by 1, wrapping aroudn if necessary using
        this.tail = (this.tail + 1) %this.capacity;
        // 3. Increment currentLength
        this.currentLength++;
        // 4. Return true indicating success
        return true;
    }
    dequeue() {
        if(this.isEmpty()) return null; // Queue is empty, cannot remove
        
        // 1. Get the value at, the current head index
        let popped = this.items[this.head];
        // 2. Optional: set that indext to null to clear the data
        // this.items[this.head] = null // Optional: Set the index to null to clear the data
        // 3. More the head pointer forward by 1, wrapping aroudn if necessary using %
        this.head = (this.head + 1) %this.capacity;
        // decrement currentLength
        this.currentLength--;
        // return the value
        return popped;
        
    }
}

const circularQueue = new CircularQueue(5);

console.log(circularQueue.enqueue(1));
console.log(circularQueue.enqueue(2));
console.log(circularQueue.enqueue(4));
console.log(circularQueue.enqueue(3));
console.log(circularQueue.enqueue(5));
console.log(circularQueue.enqueue(6));

console.log(circularQueue.dequeue());
console.log(circularQueue.items);
console.log(circularQueue.enqueue(6));

console.log(circularQueue.items);