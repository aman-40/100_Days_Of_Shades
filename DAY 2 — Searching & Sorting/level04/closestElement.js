const closestElement = (nums , target) =>{
    let ceiling = -1
    let floor = -1

    let first = 0
    let last = nums.length -1
    //ceiling
    while (first <= last){
        let mid = first + Math.floor((last - first)/2)

        if (nums[mid] < target){
            first = mid +1
        }else {
            ceiling = nums[mid]
            last = mid - 1
        }
    }

    first = 0
    last = nums.length -1
    //floor
    while (first <= last){
        let mid = first + Math.floor((last - first)/2)
        if(nums[mid] <= target){
            floor = nums[mid]
            first = mid + 1
        }else{
            last = mid -1
        }
    }

    if(floor === -1) return ceiling
    if(ceiling === -1) return floor

    let floorDistance = Math.abs(target - floor)
    let ceilingDistance = Math.abs(ceiling - target)

    if(floorDistance <= ceilingDistance){
        return floor
    }else{
        return ceiling
    }

}

console.log(closestElement([1, 3, 5, 7, 9], 6))