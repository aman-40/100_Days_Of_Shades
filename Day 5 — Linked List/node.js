//how to create node 

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

// then
let node1 = new Node(10)

// create another node 
let node2 = new Node(20)

let node3 = new Node(50)
node2.next = node3

// linking the nodes
node1.next = node2

// head note is the first node
let head = node1

let current = head
let sum =0 
while(current !== null){
    sum += current.value
    current = current.next
}
console.log(sum)