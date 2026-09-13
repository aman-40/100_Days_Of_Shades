const removeDuplicates = (nums) =>{

    let slow = 0
    for(let fast = 1 ; fast < nums.length ; fast++){
        if(nums[fast] !== nums[slow]){
            nums[slow + 1] = nums[fast]
            slow++
        }
    }
    nums.length = slow + 1
    return nums
}

console.log(removeDuplicates([1, 1, 2, 2, 3]))