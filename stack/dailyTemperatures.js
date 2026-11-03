function dailyTemperatures(temperatures) {
    const result= new Array(temperatures.length).fill(0);
    const stack = []; // we will store INDICES in here, not temperatures.

    for(let currentDay = 0; currentDay<temperatures.length;currentDay++) {
        const currentTemp = temperatures[currentDay];

        while(stack.length > 0 && currentTemp  > temperatures[stack[stack.length -1]]) {
            let coldDay = stack.pop(); // Pop the cold day's index off the stack
            let waitedDays = currentDay - coldDay; //Calculate how many days it waited (currentDay - coldDay)
            result[coldDay] = waitedDays; // Save that wait time into the results array at the cold day's index

        }
        stack.push(currentDay);
    }
    return result;
}

console.log(dailyTemperatures([70, 71, 69, 72]));