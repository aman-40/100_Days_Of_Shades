const searchRange = (nums , target , start , end) =>{
    let first = start
    let last = end 

    while (first <= last){
        let mid = first + Math.floor((last - first)/2)

        if(nums[mid] === target){
            return mid
        }else if(nums[mid] < target){
            first = mid + 1
        }else{
            last = mid -1
        }
    }
    return -1
}

console.log(searchRange(
    [1, 3, 5, 7, 9, 11, 13, 15],
    11,
    2,
    5
))

console.log(searchRange(
    [1, 3, 5, 7, 9, 11, 13, 15],
    3,
    2,
    5
))