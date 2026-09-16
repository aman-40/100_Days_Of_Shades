const ArraySearch = (nums , target)=>{
    let rows = nums.length
    let cols = nums[0].length
    let left = 0 
    let right = rows * cols -1
    while(left <= right){
        let mid = left + Math.floor((right - left)/2)
        let row = Math.floor(mid / cols)
        let col = mid % cols
        let value = nums[row][col]

        if(value === target) return true
        if(value < target){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    return false
}