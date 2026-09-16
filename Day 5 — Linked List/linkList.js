class Node {
    constructor(val){
        this.value = val
        this.next = null
    }
}

const get = (head, index) => {
    let current = head
    for(let i = 0 ; i < index ; i++){
        if(current === null) return -1
        current = current.next
    }
    return current === null ? -1 : current.value
}

class MyLinkedList {

    constructor() {
        this.head = null
    }

    addAtHead(val) {

        let newNode = new Node(val)
        newNode.next = this.head
        this.head = newNode
    }

    addAtTail(val) {
        let newNode = new Node(val)
        if (this.head === null) {
            this.head = newNode
            return
        }
        let current = this.head
        while (current.next !== null){
            current = current.next
        }
        current.next = newNode
    }

    addAtIndex(index , val){
        if(index < 0) return 
        if(index === 0){
            return this.addAtHead(val)
        }
        let count = 0
        let current = this.head
        while(current !== null){
            count++
            current = current.next
        }

        if(count === index){
            return this.addAtTail(val)
        }
        if(count < index) return 

        let newNode = new Node(val)
        let previous = this.head
        for(let i = 0 ; i < index -1; i++){
            
            previous = previous.next
        }
        newNode.next = previous.next
        previous.next = newNode




    }

    deleteNode(index) {
        if(index < 0) return
        if(this.head === null) return

        let count = 0
        let cur = this.head
        while(cur !== null){
            count++
            cur = cur.next
        }
        if(count <= index) return 



        if(index === 0){
            this.head = this.head.next
            return
        }
        let previous = this.head
        for(let i = 0 ; i < index -1 ; i++){
            previous = previous.next
        }
        let current = previous.next
        previous.next = current.next
    }
}