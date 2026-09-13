const ceilingElement = (arr , target) =>{
    let answer = -1

    let first = 0
    let last = arr.length -1

    while (first <= last){
        let mid = first + Math.floor((last - first)/2)

        if (arr[mid] < target){
            first = mid +1
        }else {
            answer = arr[mid]
            last = mid - 1
        }
    }
    return answer
}

console.log(ceilingElement([1, 3, 5, 7, 9], 9))