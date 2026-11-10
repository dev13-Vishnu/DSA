class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0; // Front of the queue
        this.tailIndex = 0; // Back of the queue
    }
    enqueue(value) {
        // 1. Add the value to the items objects at the current tailIndex
        this.items[this.tailIndex] = value; 
        // 2. Move the tailIndex back by one to prepare for the next value
        this.tailIndex++;
    }
    dequeue() {
        // Prevent the headInde from moving past tailIndex
        if(this.headIndex === this.tailIndex) return undefined;
        // 1. Store the item at the headIndex so we can return it
        let popped = this.items[this.headIndex];

        // 2. Delete thet item from the object to free up memory
        delete this.items[this.headIndex];
        // 3. Move the headIndex forward to the nexst person in line
        this.headIndex++;
        // 4. Return the stored item
        return popped;
        
    }

}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);

console.log(JSON.stringify(queue, null , 2));

console.log(queue.dequeue());
console.log( queue.dequeue());
console.log(JSON.stringify(queue, null , 2));
