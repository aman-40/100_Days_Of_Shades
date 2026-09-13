const ceiling = (nums , target) =>{
    let result = -1
    let left = 0
    let right = nums.length -1

    while(left <= right){
        let mid = left + Math.floor((right -left)/2)
        if (nums[mid] < target){
            left = mid + 1
        }else {
            result = nums[mid]
            right = mid -1
        }
    }
    return result
}

console.log(ceiling([1, 2, 4, 6, 8, 10],6))