
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Queue {
    constructor () {
        this.front = null;
        this.rear= null;
        this.length = 0;

    }
    enqueue(data){
        const newNode = new Node(data);
        if(!this.front) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.length++;
    }
    dequeue() {
        if(!this.front) return "queue ie empty";
    }
    peek() {
        this.front ? this.front.data : null;
    }
    print() {
        
    }
}