const revNode = (head)=>{
    let previous = null
    let current = head
    while(current !==null){
        let next = current.next
        current.next = previous
        previous = current
        current = next
    }
    return previous
}