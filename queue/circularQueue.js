class CircularQueue{
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;

        this.head = 0; 
        this.tail = 0;
    }
    isFull() {
        return this.currentLength === this.capacity;
    }
    isEmpty() {
        return this.currentLength === 0;
    }
    enqueue(value) {
        if (this.isFull()) return false;
        this.items[this.tail] = value;
        this.tail = (this.tail + 1) %this.capacity;
        this.currentLength++;
        return true;
    }
    dequeue() {
        if(this.isEmpty()) return null;
        
        let popped = this.items[this.head];
        // this.items[this.head] = null // Optional: Set the index to null to clear the data
        this.head = (this.head + 1) %this.capacity;
        this.currentLength--;
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