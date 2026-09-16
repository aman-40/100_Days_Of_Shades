const detectCycle = (head) => {

    let slow = head
    let fast = head
    // Phase 1: detect cycle
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
        if(fast === slow) break
    }

    if(fast === null || fast.next === null){
        return null
    }

    // Phase 2: find entrance
    slow = head
    while(fast !== slow){
        slow = slow.next
        fast = fast.next
    }

    return slow
}