class MinStack {
    constructor(){
        this.stack = []
        this.minStack = []
    }
    push(val){
        this.stack.push(val)
        if(this.minStack.length === 0){
            this.minStack.push(val)
        }else{
            if(this.minStack[this.minStack.length - 1] > val){
                this.minStack.push(val)
            }else{
                this.minStack.push(this.minStack[this.minStack.length -1])
            }
        }
    }

    pop(){
        this.stack.pop()
        this.minStack.pop()
    }
    top(){
        return this.stack[this.stack.length -1]
    }
    getMin(){
        return this.minStack[this.minStack.length -1]
    }
}

let minStack = new MinStack()

minStack.push(8)
minStack.push(4)
minStack.push(6)
minStack.push(2)
minStack.push(5)

console.log(minStack.stack)
console.log(minStack.minStack)

console.log(minStack.top())
console.log(minStack.getMin())

minStack.pop()

console.log(minStack.top())
console.log(minStack.getMin())