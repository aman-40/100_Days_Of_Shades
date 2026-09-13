const findMin = (nums) =>{

    let left = 0 
    let right = nums.length -1

    while(left <= right){
        if(left === right) return nums[left]
        let mid = left + Math.floor((right - left)/2)
        if (nums[mid] > nums[right]){
            left = mid + 1
        }else{
            right = mid
        }
    }
}

console.log(findMin([8,7,6,5,1,2,3,4,5]))