const moveZeroes = (nums) => {
    let slow = 0
    for (let fast = 0 ; fast < nums.length ; fast++){
        if(nums[fast] !== 0){
            nums[slow] = nums[fast]
            slow++
        }
    }
    while(slow < nums.length){
        nums[slow] = 0
        slow++
    }
    return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12]))