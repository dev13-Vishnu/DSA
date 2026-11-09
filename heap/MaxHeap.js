class MaxHeap{
    constructor(){
        this.values = [];
    }
    getLeftChildIndex(parentIndex) {
        return (2 * parentIndex) + 1;
    }
    getRightChildIndex(parentIndex) {
        return (2 * parentIndex) + 2;
    }
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }
    insert(value) {
        // 1. Push the value into the this.values array
        this.values.push(value);
        
        // 2. Create a variable 'currentIndex' set to the last item's index (this.values.length - 1)
        let currentIndex = this.values.length -1;
        
        // 3. Create a while loop that runs AS LONG AS currentIndex is greater than 0:
        while(currentIndex> 0) {

            // a. Get the parentIndex of the currentIndex
            let parentIndex = this.getParentIndex(currentIndex);
            let parent = this.values[parentIndex];

            // b. If the value at currentIndex is GREATER than the value at parentIndex:
            if(parent < this.values[currentIndex]) {
                // - Swap the two values in the this.values array
                [this.values[parentIndex],this.values[currentIndex]] = [this.values[currentIndex], this.values[parentIndex]];
                // - Update currentIndex to be the parentIndex (so we can keep bubbling up!)
                currentIndex = parentIndex;
            } else {
                // c. Otherwise (if it's not greater):
                // - Break out of the loop! We found its perfect spot.
                break;
            }
        }
        // 4. Return this
        return this;                
    }
    extractMax() {
        if (this.values.length === 0) return undefined;
        if (this.values.length === 1) return this.values.pop();
        
        // 1. Save the max value to return later
        let max = this.values[0];
        
        // 2. Move the last item to the root position, and remove it from the end
        this.values[0] = this.values.pop();
        
        // 3. "Sink Down" setup
        let currentIndex = 0;
        
        while (true) {
            let leftIndex = this.getLeftChildIndex(currentIndex);
            let rightIndex = this.getRightChildIndex(currentIndex);
            let largestIndex = currentIndex;
            
            // a. If the left child exists AND is greater than the value at largestIndex:
            if(this.values[leftIndex] && this.values[largestIndex]<this.values[leftIndex]){
                // Update largestIndex to be leftIndex
                largestIndex = leftIndex
            }
            
            // b. If the right child exists AND is greater than the value at largestIndex:
            if(this.values[rightIndex] && this.values[largestIndex]<this.values[rightIndex]){
                 // Update largestIndex to be rightIndex
                 largestIndex = rightIndex;
            }
            // c. If largestIndex is STILL currentIndex, it hasn't changed. We are done! Break.
            if(largestIndex === currentIndex) {
                break;
            }
            // d. Otherwise,
            else {
            // swap the values at currentIndex and largestIndex.
            [this.values[currentIndex], this.values[largestIndex]] = [this.values[largestIndex], this.values[currentIndex]];
            // e. Update currentIndex to be largestIndex so we can keep sinking.
            currentIndex = largestIndex;
            }
        }
        
        // 4. Return the max value
        return max;
    }
}