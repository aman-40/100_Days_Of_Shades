const firstLastPosition = (nums , target) =>{
    //for lowerbound
    let first = 0 
    let last = nums.length -1
    let index1 = -1
    let index2 = -1
    let result = []
    while (first <= last){
        let mid = first + Math.floor((last - first)/2)
        if (nums[mid] < target){
            first = mid + 1
        }else{
            last = mid -1
        }
        index1 = first
    }

    //for upperbound
    first = 0
    last = nums.length -1
    while(first <= last){
        let mid = first + Math.floor((last - first)/2)
        if (nums[mid] <= target){
            first = mid + 1
        }else{
            last = mid - 1
        }
        index2 = first -1
    }

    result.push(index1)
    result.push(index2)
    return result
}

console.log(firstLastPosition([1, 2, 2, 2, 4, 5, 6],2))