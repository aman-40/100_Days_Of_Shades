const evalRPN = (token) => {

    let stack = []
    for(const tokens of token){
        if(tokens === "+" || tokens === "-" || tokens === "*" || tokens === "/"){
            let right = stack.pop()
            let left = stack.pop()
            let result
            if (tokens === "+") {
                result = left + right
            }
            else if (tokens === "-") {
                result = left - right
            }
            else if (tokens === "*") {
                result = left * right
            }
            else if (tokens === "/") {
                result = Math.trunc(left / right)
            }
            stack.push(result)
        }else{
            stack.push(Number(tokens))
        }
    }
    return stack[stack.length - 1]
}