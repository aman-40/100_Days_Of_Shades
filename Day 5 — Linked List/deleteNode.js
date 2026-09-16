class Node {
    constructor(val){
        this.value = val
        this.next = null
    }
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)

node1.next = node2
node2.next = node3
node3.next = node4

let head = node1
console.log(head)

const deleteNode = (head , target) =>{
    if(head === null) return head
    if(head.value === target) return head.next

    let previous = head
    let current = head.next
    while(current !== null){

        if(current.value === target){
            previous.next = current.next
            return head
        }


        previous = current
        current = current.next
    }

    return head
}

console.log(deleteNode(head , 3))

