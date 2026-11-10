function merge(arr1, arr2) {
    // 1. Create an empty 'results' array
    const results = [];
    
    // 2. Create two pointers, i and j, both starting at 0
    let i = 0;
    let j = 0;
    
    // 3. Create a while loop that runs AS LONG AS i < arr1.length AND j < arr2.length:
    while(i<arr1.length && j<arr2.length) {
         // a. If arr1[i] is smaller than arr2[j]:
         if(arr1[i] <= arr2[j]) {
              // Push arr1[i] into results, and move i forward (i++)
              results.push(arr1[i]);
              i++;
         } 
         // b. Else:
         else {
              // Push arr2[j] into results, and move j forward (j++)
              results.push(arr2[j]);
              j++;
         }
    }
    // 4. When the loop breaks, one array will be empty, but the other might still have leftover numbers!
         // Create a while loop to push the rest of arr1 into results (while i < arr1.length)
         if(i< arr1.length) {
            results.push(...arr1.slice(i))
         }
         // Create a while loop to push the rest of arr2 into results (while j < arr2.length)
         if(j< arr2.length) {
            results.push(...arr2.slice(j))
         }
         
    // 5. Return the results array
    return results;
}

function mergeSort(arr) {
    // 1. The Base Case: If the array has 1 or 0 items, it's already sorted! Return the array.
    if(arr.length <=1) return arr;
    
    // 2. Find the middle index of the array (Math.floor(arr.length / 2))
    let mid = Math.floor(arr.length/2);
    
    // 3. Slice the array into two halves:
         // 'left' is arr.slice(0, middle)
    let left = arr.slice(0,mid);
    // 'right' is arr.slice(middle)
    let right = arr.slice(mid);

         
    // 4. The Magic (Recursion):
         // Return the result of passing the left and right halves back into your `merge` helper.
         // BUT wait! Before you pass them to merge(), you have to call mergeSort() on them so they keep splitting!
         
         // e.g., return merge( mergeSort(left), mergeSort(right) );
    return merge(mergeSort(left), mergeSort(right));
}