const isValid = (s) => {
    let stack = []
    let map = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"]
    ]) 
    for(let num of s){
        if(map.has(num)){
            if(stack[stack.length -1] !== map.get(num)){
                return false
            }
            stack.pop()
        }else{
            stack.push(num)
        }
    }
    return stack.length === 0 
}

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("([)]"))
console.log(isValid("{[]}"))