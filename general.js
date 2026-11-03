function sumArray(arr) {
    if(arr.length === 0) {
        return 0;
    }
    return arr[0]+ sumArray(arr.slice(1));
}

console.log(sumArray([5, 4, 3, 2, 1]));

function reverseString(str) {
    if(str === "") {
        return "";
    }
    return reverseString(str.substr(1)) + str.charAt(0)
}

console.log(reverseString("hello"))

const flatten = (arr) => {
    let result = []
    arr.forEach(item=> {
        if(Array.isArray(item) ){
            result= result.concat(flatten(item));
        } else {
            result.push(item);
        }
    })
    return result;
}

console.log(flatten([1, [2,3,[4,5],6],7]))

const deepClone = (obj) => {
    if( obj === null || typeof(obj) !== 'object') {
        return obj;
    }
    let copy = Array.isArray(obj)? [] : {};
    
    for(let key in obj) {
        copy[key] =  deepClone(obj[key]);
        
    }
    return copy;
}


const copy= deepClone({
  "id": "USR-942",
  "active": true,
  "profile": {
    "name": "Alex",
    "roles": ["admin", "developer"],
    "settings": {
      "theme": "dark",
      "notifications": ["email", "sms"]
    }
  }
}
);

console.log(copy);

function findKey(obj, targetKey) {
    if(obj === null || typeof obj !== "object") return null;
    if(Object.hasOwn(obj,targetKey) ) {
        return obj[targetKey]
    } 
    for( let key in obj) {
        const result= findKey(obj[key],targetKey)
        if(result !== null) return result;
    }
    return null
}

console.log(findKey({
  "id": "USR-942",
  "active": true,
  "profile": {
    "name": "Alex",
    "roles": ["admin", "developer"],
    "settings": {
      "theme": "dark",
      "notifications": ["email", "sms"]
    }
  }
}
,"theme"))

const fibonacci = (n, memo = {}) => {
    if(n in memo) return memo[n];
    
    if(n === 0) return 0;
    if(n <= 2) return 1;
    
    memo[n] =  fibonacci(n-1, memo) + fibonacci(n-2, memo);
    return memo[n]
}

console.log(fibonacci(6));


