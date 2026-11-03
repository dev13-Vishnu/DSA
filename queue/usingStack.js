class MyQueue{
    constructor() {
        this.pushStack = [];
        this.popStack = [];
    }
    enqueue(value) {
        this.pushStack.push(value);
        return;
    }
    dequeue() {
        this._transfer();
        return this.popStack.pop();
    }
    peek(){
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