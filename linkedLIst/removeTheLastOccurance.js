class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LL {
    constructor() {
        this.head = null ;
        this.tail = null;
        this.length = 0;

    }
    append (value) {
        const newNode = new Node(value) ;
        if(!this.head) {
            this.head =this.tail=newNode;
            this.length++;
            return this;
        }
        // let current = this.head;
        // while(current.next) {
        //     current = current.next;

        // }
        // current.next = newNode;
        this.tail.next = newNode;
        this.tail =newNode;
        this.length++;
        return this;
    }
    unshift(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = this.tail= newNode;

            this.length++;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    insert(idx,val) {
        if(idx < 0 || idx > this.length) {
            return false;
        }
        if(idx ===0 ) {
            this.unshift(val);
            return;
        }
        if(idx === this.length) {
            this.append(val);
            return;
        }
        const newNode = new Node(val);
        // if(!this.head) {
        //     this.head = newNode;
        //     return;
        // }
        let count = 0;
        let current = this.head;
        while(count<idx-1) {
            current = current.next;
            count++;
        }
        // if(current === null) {
        //     return;
        // }
        newNode.next = current.next;
        current.next = newNode;
        this.length++
        return this;
        
    }
    pop() {
        if(!this.head) {
            this.head = this.tail = null;
            this.length = 0;
            console.log("Empty case");
            return undefined;
        }
        if(this.length ===1) {
            const popped = this.head.value;
            this.head = this.tail = null;
            this.length = 0;
            console.log("Length 1 case")
            return popped;
        }
        let current = this.head;
        while(current.next.next) {
            current = current.next;
        }
        const popped = current.next.value;
        current.next = null; 
        this.tail = current;
        this.length--;
        console.log("Length higher than 1 case")
        return popped;

    }
    removeLastOccurance(target) {
        if(this.head === null) return null;

        let lastMatch = null;
        let lastMatchPrev = null;

        if(this.head.value === target) {
            lastMatch = this.head;
        }
        let current = this.head
        while (current.next) {
            if(current.next.value === target) {
                lastMatch = current.next;
                lastMatchPrev = current;
            }
            current = current.next;
        }
        if(lastMatch !== null) {
            const popped = lastMatch.value;

            if(lastMatchPrev === null) {
                
                this.head = this.head.next;
                if(this.head === null){
                    this.tail = null;
                }
            } else {
                lastMatchPrev.next = lastMatch.next;
                if(lastMatch === this.tail) {
                    this.tail = lastMatchPrev
                }
            }
            this.length--;
            return popped;
        }
        return undefined;
    }

    print() {
        let current = this.head;
        let result = "";
        while(current) {
            result+=current.value+"->"
            current = current.next;
        }
        console.log(result + "null");
        return;
    }
    dummyRemoveLastOccurance(target) {
        if(this.head === null) return undefined;

        let dummy  = new Node(0);
        dummy.next = this.head;

        let lastMatchPrev = null;
        let current = dummy;
        while(current.next!== null) {
            if(current.next.value === target){
                lastMatchPrev = current;
            }
            current = current.next;
        }
    if(lastMatchPrev !== null) {
        let lastMatch = lastMatchPrev.next;
        let popped = lastMatch.value;

        lastMatchPrev.next = lastMatch.next;

        this.head = dummy.next;
        if(lastMatch === this.tail) {
            this.tail =(lastMatchPrev === dummy) ? null: lastMatchPrev;
        }
        this.length--;
        return popped;
    }
    return undefined;
    }


    
}

const list = new LL ();
list
    .append(10)
    .append(20)
    .append(30)
    .append(10)
    .append(40)
    .append(50)
    .append(20);

list.print();
    console.log(list.removeLastOccurance(10));
    console.log(list.removeLastOccurance(800));

    // console.log(JSON.stringify(list,2,null))
    list.print();

    console.log(list.dummyRemoveLastOccurance(20))
    list.print();

    // console.log(list.pop());
    // console.log(list.pop())
    // console.log(list.pop())
    // console.log(list.pop())
    // console.log(JSON.stringify(list,2,null))

