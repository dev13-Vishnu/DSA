// Remember your swap trick! 
// [arr[i], arr[j]] = [arr[j], arr[i]];

function pivot(arr, start = 0, end = arr.length - 1) {
    // 1. Store the pivot value (arr[start]) in a variable
    let pivot = arr[start];
    
    // 2. Create a 'swapIndex' variable and set it to 'start'.
    //    (This tracks where the pivot should eventually land)
    let swapIndex = start;
    
    // 3. Create a for loop that goes from i = start + 1 up to (and including) end:
    for(let i = start+1; i<=end; i++) {
        // a. If the current element arr[i] is LESS than the pivot value:
        if(arr[i] < pivot) {
            // - Increment the swapIndex (swapIndex++)
            swapIndex++;
            // - Swap the element at arr[i] with the element at arr[swapIndex]
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]]
        }
    }
    // 4. After the loop finishes, swap the original pivot element (at 'start') 
    //    with the element at 'swapIndex'
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
    
    // 5. Return the swapIndex!
    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    // Base Case check: We only run the logic if there is more than 1 item in the current window.
    // (If left and right pointers overlap or equal each other, the chunk is size 1 or 0!)
    if (left < right) {
        
        // 1. Call your helper function to get the pivot index for the current window
        //    (Pass in the arr, left, and right)
        let pivotIndex = pivot(arr, left, right);
        
        // 2. Recursively call quickSort on the LEFT chunk
        //    (The array, the current left, up to pivotIndex - 1)
        quickSort(arr,left, pivotIndex - 1);
        
        // 3. Recursively call quickSort on the RIGHT chunk
        //    (The array, pivotIndex + 1, up to the current right)
        quickSort(arr, pivotIndex + 1, right);
    }
    
    // 4. Return the fully sorted array
    return arr;
}