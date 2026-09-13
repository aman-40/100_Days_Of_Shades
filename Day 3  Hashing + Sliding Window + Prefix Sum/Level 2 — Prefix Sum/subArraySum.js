const subarraySum = (nums, target) => {

    let map = new Map()
    map.set(0, 1)

    let currentSum = 0
    let count = 0

    for (let num of nums) {

        currentSum += num

        let needed = currentSum - target

        if (map.has(needed)) {
            count += map.get(needed)
        }

        if (map.has(currentSum)) {
            map.set(currentSum, map.get(currentSum) + 1)
        } else {
            map.set(currentSum, 1)
        }

    }

    return count
}

console.log(subarraySum([1, 2, 3], 3))