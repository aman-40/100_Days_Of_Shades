// Pass 1
while (current !== null) {
    map.set(current, new Node(current.value))
    current = current.next
}

// Pass 2
while (current !== null) {
    let copy = map.get(current)

    copy.next = map.get(current.next)
    copy.random = map.get(current.random)

    current = current.next
}