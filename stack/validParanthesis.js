/*
function validParanthesis(str) {
    let n = str.length;
    let open = ["(", "[", "{"];
    let close = [")", "]", "}"];
    let stack = [];
    for(let i = 0; i<= n; i++) {
        if(open.includes(str[i])){
            if(str[i] === "("){
                stack.push(")");
            } else if (str[i] === "[") {
                stack.push("]");
            } else {
                stack.push("}")
            }
            // console.log(stack)
        }else if (close.includes(str[i])){
            // console.log("enters here", str[i]);
            if(stack[stack.length-1]!=str[i]) {
                return false;
            } else if(stack[stack.length -1] == str[i]){
                stack.pop();
            }
        }
    }
    if(stack.length > 0) {
        return false
    }
    return true;

}

console.log(validParanthesis("{{[]}}"));
console.log(validParanthesis("{{[]}}}"));
console.log(validParanthesis("{{[()]}}}"));
console.log(validParanthesis("()[]mna ies {}"));
console.log(validParanthesis("{{"));
*/

// function validParanthesis (str) {

//     let map =  {
//         "(" : ")",
//         "{" : "}",
//         "[" : "]"
//     }
//     let stack = [];
//     for(let char of str) {
//         if(map[char]) {
//             stack.push(map[char]);
//         } else {
//             if(stack.pop() !== char) {
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0;
// }


console.log(validParanthesis("{{[]}}")); // true
console.log(validParanthesis("{{[]}}}")); // false
console.log(validParanthesis("{{[()]}}}")); //false
console.log(validParanthesis("()[]{}")); // true
console.log(validParanthesis("{{"));// false


function validParanthesis(str) {
    const map = {
        "(":")",
        "[":"]",
        "{":"}"
    }

    const stack = [];

    for(let char of str) {
        if(map[char]) {
            stack.push(map[char]);
        } else {
            if(stack.pop() !== char) {
                // console.log("control in if block")
                return false;
            }
        }
    } 
    return stack.length === 0;
}