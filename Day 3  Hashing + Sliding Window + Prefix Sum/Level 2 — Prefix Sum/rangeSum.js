const rangeSum = (nums , left , right) => {
    if(!((left >= 0) && (right < nums.length) && (right >= left))) return 0
    if(nums.length === 0) return 0
    let prefix = [nums[0]]
    for (let i = 1 ; i < nums.length ; i++){
        prefix.push(nums[i] + prefix[i-1])
    }
    let result = prefix[right] - prefix[left -1]
    if(left > 0){
        return result
    }else{
        return prefix[right]
    }
}
console.log(rangeSum([2, 4, 1, 5, 3], 1, 3))