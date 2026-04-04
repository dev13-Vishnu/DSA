class MinStack{
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    push(x){
        this.stack.push(x);
        if(this.minStack.length === 0 || x <= this.getMin()){
            this.minStack.push(x);
        } 
    }
    pop() {
        if(this.stack.length === 0) return null;
        let popped = this.stack.pop();
        if(popped === this.getMin()) {
            this.minStack.pop();
        }
        return popped;
    }
    getMin() {
        return this.minStack[this.minStack.length -1]
    }
    top() {
        return this.stack[this.stack.length - 1];
    }
}

const minStack = new MinStack();

minStack.push(5);
console.log(minStack.getMin());
minStack.push(2);
console.log(minStack.getMin());
minStack.push(10);
console.log(minStack.getMin());
minStack.push(1);
console.log(minStack.getMin());
console.log("Popped value",minStack.pop());
console.log(minStack.getMin());

