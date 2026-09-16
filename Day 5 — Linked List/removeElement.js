const removeElement = (head, target) => {

    while (head !== null && head.value === target) {
        head = head.next
    }
    let previous = head
    let current = head === null ? null : head.next
    while (current !== null) {
        if (current.value === target) {
            previous.next = current.next
            current = previous.next

        } else {
            previous = current
            current = previous.next
        }
    }
    return head
}