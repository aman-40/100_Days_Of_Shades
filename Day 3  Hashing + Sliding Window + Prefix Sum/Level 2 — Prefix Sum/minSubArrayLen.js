const minSubArrayLen = (target, nums) => {
    let left = 0 
    let right = 0
    let sum = 0
    let result = Infinity
    while(right < nums.length){
        sum += nums[right]
        while (sum >= target){
            result = Math.min(result, right - left + 1)
            sum -= nums[left]
            left++
        }
        right++
    }
    return result === Infinity ? 0 : result
}


console.log(minSubArrayLen(50, [2, 3, 1, 2, 4, 3]))
// 2