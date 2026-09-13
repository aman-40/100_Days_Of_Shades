const shipWithinDays = (weights, days) => {

    // Minimum possible capacity
    let left = Math.max(...weights)

    // Maximum possible capacity
    let right = weights.reduce((sum, weight) => sum + weight, 0)

    while (left <= right) {

        let mid = left + Math.floor((right - left) / 2)

        let daysNeeded = 1
        let currentWeight = 0

        // Check how many days are needed
        // with capacity = mid
        for (let i = 0; i < weights.length; i++) {

            if (currentWeight + weights[i] <= mid) {
                currentWeight += weights[i]
            } else {
                daysNeeded++
                currentWeight = weights[i]
            }
        }

        // Capacity works → try smaller
        if (daysNeeded <= days) {
            right = mid - 1
        }
        // Capacity is too small → try larger
        else {
            left = mid + 1
        }
    }

    return left
}

console.log(
    shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5)
)

console.log(
    shipWithinDays([3,2,2,4,1,4], 3)
)

console.log(
    shipWithinDays([1,2,3,1,1], 4)
)