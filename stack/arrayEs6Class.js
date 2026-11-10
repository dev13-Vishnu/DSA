class Stack {
    constructor() {
        // The internal array holding our stack elements
        this.items = [];
    }

    // Add element to the top
    push(element) {
        this.items.push(element);
    }

    // Remove and return the top element
    pop() {
        if(this.isEmpty()) {
            return undefined; // Avoid underflow
        }
        return this.items.pop();
    }
    // View the top element without removing it
    peek() {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.items[this.items.length -1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the number of elements
    size(){
        return this.items.length;
    }
    print() {
        if(this.items.length === 0) {
            console.log("Stack is empty.");
            return;
        }
        let result = "";
        for(let i = this.items.length-1; i >=0; i--) {
            result += this.items[i] +(i === 0 ? "":" ");
        }
        console.log(result);
    }

    // Empty the stack
    clear() {
        this.items = [];
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();
console.log(stack.pop());
stack.print();
console.log(stack.peek());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
stack.print();


