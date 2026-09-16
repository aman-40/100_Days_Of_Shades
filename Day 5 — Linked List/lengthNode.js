const lengthNode = (head) =>{
    let current = head
    let count = 0
    while(current !== null){
        count++
        current = current.next
    }
    return count
}