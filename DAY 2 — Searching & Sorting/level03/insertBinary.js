const insertBinary = (arr , target) =>{


    let left = 0 
    let right = arr.length -1 
    while (left <= right) {
        let mid = Math.floor((left + right)/2)
        if (arr[mid] < target){
            left = mid + 1
        }else {
            right = mid - 1
        }
    }

    return left
}

console.log(insertBinary([1, 3, 5, 6],2))//it is also know as lower boundary and also we can do it for binary search
