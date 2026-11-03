function longestSubstring(str) {
    let left = 0;
    let map = new Map();
    let currentMax = 0;

    for(let right = 0; right < str.length; right++) {
        const char = str[right];
        if(map.has(char)&& map.get(char) >=left) {
            left = map.get(char) +1;
        }
        map.set(char, right);
        currentMax = Math.max(currentMax, right -left +1)
    }
    return currentMax;
}

console.log(longestSubstring("abcabcbb"))