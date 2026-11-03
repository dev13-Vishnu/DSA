class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0; 
        this.tailIndex = 0;
    }
    enqueue(value) {
        this.items[this.tailIndex] = value;
        this.tailIndex++;
    }
    dequeue() {
        if(this.headIndex === this.tailIndex) return undefined;
        let popped = this.items[this.headIndex];

        delete this.items[this.headIndex];
        this.headIndex++;
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
