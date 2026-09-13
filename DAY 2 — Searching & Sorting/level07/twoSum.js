const twoSum = (nums , target) =>{
    //sort
    for(let i = 1 ; i < nums.length ; i++){
        let key = nums[i]
        let j = i - 1
        while ((j >= 0) && (nums[j] > key)){
            nums[j + 1] = nums[j]
            j--
        }
        nums[j + 1] = key 
    }

    let left = 0
    let right = nums.length -1

    while (left < right){
        let sum = nums[left] + nums[right]
        if(sum === target){
            return true
        }else if(sum < target){
            left++
        }else{
            right--
        }
    }
    return false
}

console.log(twoSum([7, 2, 5, 1, 8, 3],20))