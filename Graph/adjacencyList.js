class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        // 1. Check if the vertex ALREADY exists in this.adjacencyList
        if(!this.adjacencyList[vertex]) {
        //    (We don't want to accidentally overwrite an existing city and delete all its roads!)
        
        // 2. If it does NOT exist, add it to this.adjacencyList and set its value to an empty array []
        this.adjacencyList[vertex] = [];
        // 3. Return true if added successfully, false if it already existed
        return true;
        }
        return false;
    }
    addEdge(vertex1, vertex2) {
        // (Assuming both vertices already exist in the graph)
        
        // 1. Find vertex1 in this.adjacencyList and push vertex2 into its array
        this.adjacencyList[vertex1].push(vertex2)
        
        // 2. Find vertex2 in this.adjacencyList and push vertex1 into its array
        this.adjacencyList[vertex2].push(vertex1)
        
        // 3. Return true
        return true;
    }
    removeEdge(vertex1, vertex2) {
        // (Assuming both vertices exist in the graph)
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            
            // 1. Reassign vertex1's array to be a filtered version of itself, 
            //    keeping every vertex EXCEPT vertex2
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
            
            // 2. Reassign vertex2's array to be a filtered version of itself, 
            //    keeping every vertex EXCEPT vertex1
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
            
            // 3. Return true
            return true;
        }
        return false;
    }
    removeVertex(vertex) {
        // 1. Check if the vertex exists. If not, return undefined.
        if(!this.adjacencyList[vertex]) {
            return undefined
        }
        
        // 2. We need to look at every single city this vertex is connected to.
        //    Create a while loop that runs AS LONG AS this vertex's array has length:
            while(this.adjacencyList[vertex].length) {

            // a. Pop the last connected city off the array
            let popped = this.adjacencyList[vertex].pop();
            // b. Call this.removeEdge() passing in the vertex we are deleting, 
            //    and the connected city we just popped.
            this.removeEdge(popped,vertex);
            }
            
        // 3. Once the while loop finishes, the vertex's array is empty. 
        //    Now it is safe to use the `delete` keyword to remove the vertex 
        //    from this.adjacencyList entirely.
        delete this.adjacencyList[vertex];
        
        // 4. Return this
        return this;
    }
}