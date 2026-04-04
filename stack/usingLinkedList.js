class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor () {
        this.top = null;
        this.size = 0;

    }
    push(data) {
        const node = new Node(data);
        node.next = this.top;
        this.top = node;
        this.size++;
    }
    pop() {
        if(this.isEmpty()){
            console.log("Stack Underflow. The stack is empty.");
            return;
        }
        let popped = this.top.data;
        this.top = this.top.next;
        this.size--;
        return popped;
    }
    peek() {
        if(this.isEmpty()) {
            return null;
        }
        return this.top.data;
    }
    print() {
        if(this.isEmpty()) {
            return null;
        }
        let current = this.top;
        let result = "";
        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }
        console.log(result +"null");
    }
    isEmpty(){
        return this.size === 0;
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();

console.log(stack.pop());

stack.print();
console.log(stack.pop());
stack.print();
console.log(stack.peek());

