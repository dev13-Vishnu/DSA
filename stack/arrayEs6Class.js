class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.items.pop();
    }
    size(){
        return this.items.length;
    }
    peek() {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.items[this.items.length -1];
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
    clear() {
        this.items = [];
    }
    isEmpty() {
        return this.items.length === 0;
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


