const addTwoNumbers = (l1, l2) => {

    let dummy = new Node(0)
    let current = dummy

    let p1 = l1
    let p2 = l2

    let carry = 0

    while (p1 !== null || p2 !== null || carry !== 0) {

        let value1 = p1 === null ? 0 : p1.value
        let value2 = p2 === null ? 0 : p2.value

        let sum = value1 + value2 + carry

        let digit = sum % 10
        carry = Math.floor(sum / 10)

        current.next = new Node(digit)
        current = current.next

        if (p1 !== null) {
            p1 = p1.next
        }

        if (p2 !== null) {
            p2 = p2.next
        }
    }

    return dummy.next
}