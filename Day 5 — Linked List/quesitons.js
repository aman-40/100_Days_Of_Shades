const reorderList = (head) => {

    // Step 1: Find the middle
    let slow = head
    let fast = head

    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    // Step 2: Split the list
    let second = slow.next
    slow.next = null

    // Step 3: Reverse the second half
    let previous = null
    let current = second

    while (current !== null) {
        let next = current.next

        current.next = previous
        previous = current
        current = next
    }

    // Step 4: Merge the two halves
    let first = head
    second = previous

    while (second !== null) {

        let firstNext = first.next
        let secondNext = second.next

        first.next = second
        second.next = firstNext

        first = firstNext
        second = secondNext
    }
}