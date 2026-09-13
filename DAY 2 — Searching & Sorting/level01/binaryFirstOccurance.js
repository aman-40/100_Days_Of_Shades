const binaryFirstOccurance = (arr , target) =>{


    let left = 0
    let right = arr.length -1
    let result = -1

    while (left <= right){
        let mid = Math.floor((left + right)/2)
        if (arr[mid] === target){
            right = mid -1
            result = mid
        }else if(arr[mid] < target){
            left = mid + 1
        }else{
            right = mid -1
        }
    }
    return result
}

console.log(binaryFirstOccurance([1, 2, 2, 2, 4, 5, 6],0))