class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor() {
        this.root = null;
    }
    insert(value) {
        //1. Create a newNode.
        const newNode = new Node(value) ; 

        //2. If there is no root the newNode becomes the root. Return this.
        if(!this.root) { 
            this.root  = newNode;
            return this;
        } 
        
        //3. Other wise, set a 'current' variable to this.root
        let current = this.root; 
        //4. Create a while(true) loop to traverse the tree:
        while(true) { 
            //a. Check for duplicates (if value === current.value, return undefined)
            if(value === current.value) return undefined;

            if(value < current.value) { //b. if the value is LESS than current.value (Go Left!)

                //- If current.left is  null set current.left as newNode and return this
                if(current.left === null) {
                    current.left = newNode;
                    return this;
                } 
                //- Otherwise move current = current.left
                else {
                    current = current.left;
                }
            }
            //c. If the value is GREATER than current.value (Go Right!)
            else {
                //- If current.right is  null set current.right as newNode and return this
                if(current.right === null) {
                    current.right = newNode;
                    return this;
                }
                //- Otherwise move current = current.right
                 else {
                    current = current.right;
                }
            }

        }
    }
    contains(value) {
        //1. If there is no root return false
        if(!this.root) return false;

        //2. Set 'current' to this.root
        let current = this.root;
        //3. Create a loop that runs as LONG AS current exists
        while(current) {
            if (current.value === value) {
                return true;
            }
            if(value < current.value) {
                current = current.left;
            } else {
                current = current.right
            }
        }
        return false;
    }
    BFS() {
        let currentNode = this.root; //1. Set a 'currentNode' variable to this root
        if (!currentNode) return []; //- Guard against empty trees!

        let queue = []; //2. Create a 'queue' array (waiting list)
        let result = []; //3. Create a 'result' array(to store the values you visit)

        queue.push(currentNode) ; //4. Put the 'currentNode' into the result array (queue.push)

        while(queue.length) { // 5. Create a loop that runs AS LONG AS the queue is not empty (queue.length)
            currentNode = queue.shift(); // a. Take the first node out of the queue (queue.shift) and assign it to currentNode
            result.push(currentNode.value); // b. Push the currentNode's value into the results array

            if(currentNode.left) {
                queue.push(currentNode.left);
            } 
            if(currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return result;
    }
    dfsPreOrder() {
        let results = [];
        if(!this.root) return results;

        function traverse(currentNode) {
            results.push(currentNode.value);
            if(currentNode.left) {
                traverse(currentNode.left);
            }
            if(currentNode.right) {
                traverse(currentNode.right);
            }
        }
        traverse(this.root);
        return results;
    }
    dfsPostOrder() {
        let results = [];
        if(!this.root) return results;

        function traverse(currentNode) {
            if(currentNode.left) {
                traverse(currentNode.left);
            }
            if(currentNode.right) {
                traverse(currentNode.right);
            }
            results.push(currentNode.value);
        }
        traverse(this.root);
        return results;
    }
    dfsInOrder() {
        let results = [];
        if(!this.root) return results;

        function traverse(currentNode) {
            if(currentNode.left) {
                traverse(currentNode.left);
            }
            results.push(currentNode.value);
            if(currentNode.right) {
                traverse(currentNode.right);
            }
        }
        traverse(this.root);
        return results;
    }
}

const bst = new BST();

console.log(bst.BFS())
bst.insert(5).insert(4).insert(6).insert(3).insert(7)

console.log(bst.root)

console.log(bst.BFS())

console.log(bst.dfsPreOrder())
console.log(bst.dfsPostOrder())
console.log(bst.dfsInOrder())
