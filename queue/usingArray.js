class Queue {
    constructor () {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue(){
        if (this.isEmpty()){
            return null;
        }
        return this.items.shift();
    }
    isEmpty(){
        return this.items.length === 0;
    }
    peek() {
        if(this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length-1];
    }
    print() {
        console.log(this.items.join('<-'));
    }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();
console.log(queue.dequeue());
queue.print();