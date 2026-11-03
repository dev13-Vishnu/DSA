//Kadene's Algorithm

const maxSubArray = (arr) => {
    let currentMax = arr[0];
    let globalMax = arr[0];

    for(let i = 0; i <arr.length; i++){
        currentMax = Math.max(arr[i], currentMax + arr[i]);

        if(globalMax > currentMax) {
            globalMax = currentMax;
        }
    }
    return globalMax;
}