function dailyTemperatures(temperatures) {
    // Array of 0s, same length as temperatures
    const result= new Array(temperatures.length).fill(0);
    const stack = []; // we will store INDICES in here, not temperatures.

    for(let currentDay = 0; currentDay<temperatures.length;currentDay++) {
        const currentTemp = temperatures[currentDay];

        // While stack is not empty AND currentTemp is warmer than the temp  at the top of the stack...
        while(stack.length > 0 && currentTemp  > temperatures[stack[stack.length -1]]) {
            let coldDay = stack.pop(); // 1. Pop the cold day's index off the stack
            let waitedDays = currentDay - coldDay; // 2. Calculate how many days it waited (currentDay - coldDay)
            result[coldDay] = waitedDays; // 3. Save that wait time into the results array at the cold day's index

        }

        // Push the curren day onto the stack to wait for a warmer day
        stack.push(currentDay);
    }
    
    return result;
}

console.log(dailyTemperatures([70, 71, 69, 72]));