
const lowerBound = (arr , target) =>{

    let left = 0
    let right = arr.length -1

    while (left <= right){
        let mid = left + Math.floor((right - left)/2)
        if (arr[mid] < target){
            left = mid + 1
        }else {
            right = mid - 1
        }
    }
    return left
}

const upperBound = (arr , target) =>{
    let left = 0 
    let right = arr.length -1 
    while (left <= right){
        let mid = left + Math.floor((right - left)/2)
        if(arr[mid] <= target){
            left = mid +1
        }else {
            right = mid - 1
        }
    }
    return left
}
console.log(upperBound([1, 2, 2, 2, 2, 4, 5, 7],2) - lowerBound([1, 2, 2, 2, 2, 4, 5, 7],2))