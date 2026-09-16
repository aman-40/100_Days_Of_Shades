const merge = (list1 , list2) =>{
    let p1 = list1
    let p2 = list2
    let dummy = new Node(0)

    let current = dummy
    while(p1 !== null && p2 !== null){
        if(p1.value <= p2.value){
            current.next = p1
            p1 = p1.next
        }else{
            current.next = p2
            p2 = p2.next
        }
        current = current.next
    }
    if(p1 !== null){
        current.next = p1
    }else{
        current.next = p2
    }

    return dummy.next
}