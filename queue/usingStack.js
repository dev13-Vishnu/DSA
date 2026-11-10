class MyQueue{
    constructor() {
        this.pushStack = [];
        this.popStack = [];
    }

    // Add an item to the back of  the queue
    enqueue(value) {
        this.pushStack.push(value);
        return;
    }

    // Remove and return the item from  the front of the queue
    dequeue() {
        // 1. If popStack is empty, pour everything from pushStack into popStack
        this._transfer();
        // 2. Pop and return the top item from popStack
        return this.popStack.pop();
    }
    peek(){
        // 1. If popStack is empty, pour everything from pushStack into popStack
        this._transfer();
        return this.popStack[this.popStack.length-1];
    }
    isEmpty() {
        return this.pushStack.length === 0 && this.popStack.length === 0;
    }
    _transfer() {
        if(!this.popStack.length) {
            while(this.pushStack.length > 0) {
                this.popStack.push(this.pushStack.pop());
            }
        }
    }
}