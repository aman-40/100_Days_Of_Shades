const rotateSorted = (nums, target) => {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)

        if (nums[mid] === target) {
            return true
        }

        // Duplicate ambiguity
        if (
            nums[left] === nums[mid] &&
            nums[mid] === nums[right]
        ) {
            left++
            right--
            continue
        }

        // Left half is sorted
        if (nums[left] <= nums[mid]) {

            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }

        // Right half is sorted
        } else {

            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }

    return false
}

console.log(rotateSorted([4, 5, 6, 7, 0, 0, 1, 2], 0))
// true

console.log(rotateSorted([2, 5, 6, 0, 0, 1, 2], 3))
// false

console.log(rotateSorted([1, 1, 1, 1, 1], 1))
// true

console.log(rotateSorted([1, 1, 1, 1, 1], 2))
// false