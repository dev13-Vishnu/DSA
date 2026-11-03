function groupAnagram(strs) {
    const map = {};

    for (let s of strs) {
        const key = s.split('').sort().join('');
        if(!map[key]) {
            map[key] = [];
        }
        map[key].push(s);
    }

    return Object.values(map);
}

console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]))