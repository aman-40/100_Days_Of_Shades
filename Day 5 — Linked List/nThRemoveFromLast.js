const removeFromLast = (head , indexFromLast) =>{
    let dummy = new Node(0)
    dummy.next = head
    let slow = dummy
    let fast = dummy
    for(let i = 0; i < indexFromLast ; i++){
        fast = fast.next
    }
    while(fast.next !== null){
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    return dummy.next
}