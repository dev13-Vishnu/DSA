class Stack {
    constructor () {
        this.storage = {};
        this.count = 0;
    }
    push(value) {

        this.storage[this.count] = value;
        this.count++;
    }
    pop() {
        if(this.isEmpty()) {
            return undefined;
        }
        this.count--; 
        let popped = this.storage[this.count];
        delete this.storage[this.count];
        return popped;
    }
    peek() {
        if(this.isEmpty()) {
            return undefined;
        }
        
        return this.storage[this.count -1];
    }
    isEmpty() {
        return this.count === 0;
    }
    size() {
        return this.count;
    }
}
function reverseString(str) {
    const stack = new Stack();
    let count = 0;
    while(count < str.length) {
        stack.push(str[count])
        count++;
    }
    let reversed = []
    while(stack.size()){
        let popped = stack.pop();
        reversed.push(popped);
    }
    return reversed.join('');
}
function stackSort(stack) {
    let tempStack = new Stack();
    while(!stack.isEmpty()){
        let current = stack.pop();
        while(!tempStack.isEmpty()&& tempStack.peek() <current) {
            stack.push(tempStack.pop());
        }
        tempStack.push(current);
    }
    while(!tempStack.isEmpty()) {
        stack.push(tempStack.pop());
    }
    return stack;
}

const stack = new Stack();
stack.push(50);
stack.push(40);
stack.push(30);
stack.push(20);
console.log(JSON.stringify(stackSort(stack),null,2));
console.log(reverseString("hello"))
console.log(reverseString("hello World"))