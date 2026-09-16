const isPalindrome = (head) => {

    // 1. Find the middle
    let slow = head
    let fast = head

    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    // 2. Reverse the second half
    let previous = null
    let current = slow

    while (current !== null) {
        let next = current.next

        current.next = previous

        previous = current
        current = next
    }

    // 3. Compare both halves
    let first = head
    let second = previous

    while (second !== null) {

        if (first.value !== second.value) {
            return false
        }

        first = first.next
        second = second.next
    }

    return true
}