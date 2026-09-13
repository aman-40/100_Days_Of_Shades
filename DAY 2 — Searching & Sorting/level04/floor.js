const floorElement = (arr , target) =>{
    let answer = -1

    let left = 0
    let right = arr.length -1
    while (left <= right){
        let mid = left + Math.floor((right - left)/2)
        if(arr[mid] <= target){
            answer = arr[mid]
            left = mid + 1
        }else{
            right = mid -1
        }
    }
    return answer

}

console.log(floorElement([1, 3, 5, 7, 9], 10))