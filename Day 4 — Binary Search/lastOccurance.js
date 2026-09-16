const lastOccurance = (nums , target) =>{
    let left = 0 
    let right = nums.length -1
    let answer = -1
    while(left <= right){
        let mid = left + Math.floor((right - left)/2)
        if(nums[mid] === target){
            answer = mid
            left = mid + 1
        }else if (nums[mid] < target){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    return answer
}