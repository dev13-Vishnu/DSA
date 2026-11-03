class MinStack{
    constructor() {
        this.items = [];
    }
    push(val) {
        let element;
        const currentMin = this.getMin();
        const min = Math.min(val, currentMin);
        if(this.peek() === undefined) {
            this.items.push({val,min: val})
            return;
        }
         
         element = {
            val, min
        }
        this.items.push(element);
    }
    peek() {
        if (this.items.length === 0) return undefined;
        return this.items[this.items.length-1].val
    }
    getMin() {
        if (this.items.length === 0) return undefined;
        return this.items[this.items.length-1].min;
    }
}

const minStack = new MinStack();

minStack.push(5);
minStack.push(2);
minStack.push(8);
minStack.push(1);
minStack.push(7);
 console.log (JSON.stringify(minStack, null, 2));