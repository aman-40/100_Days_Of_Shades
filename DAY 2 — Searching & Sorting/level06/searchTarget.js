const searchTarget = (nums, target) => {
    for (let i = 1 ; i < nums.length ; i++){

        let key = nums[i]
        let j = i -1

        while ((j >= 0) && (nums[j] > key)){
            nums[j + 1] = nums[j]
            j--
        }
        nums[j + 1] = key
    }

    let left = 0 
    let right = nums.length -1

    while (left <= right){
        let mid = left + Math.floor((right - left)/2)

        if(nums[mid] === target){
            return mid
        }else if (nums[mid] < target){
            left = mid + 1
        }else{
            right = mid -1
        }
    }
    return -1
}

console.log(searchTarget([7, 2, 9, 1, 5, 3, 8],8))