class Stack {
    constructor () {
        this.queue = [];
    }
    push(x){
        const  rotation = this.queue.length;
        this.queue.push(x);

        for(let i  = 0; i <rotation ; i ++) {
            this.rotate();
        }
    }
    rotate(){
        this.queue.push(this.queue.shift());
    }
    pop() {
        if(this.isEmpty()){
            return null;
        }
        return this.queue.shift();
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    size(){
        return this.queue.length;
    }
    print() {
        if(this.isEmpty()){
            return null;
        }
        console.log(this.queue.join("->"));
    }

}
const stack = new Stack()

stack.push(10);
stack.push(20);
stack.push(30);
stack.print();

