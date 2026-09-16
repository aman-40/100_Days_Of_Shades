class Node {
    constructor(val){
        this.value = val
        this.next = null
    }
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)

node1.next = node2
node2.next = node3

let head = node1

console.log(head)

//insert at begin

let newNode = new Node(10)
newNode.next = head
head = newNode

console.log(head)