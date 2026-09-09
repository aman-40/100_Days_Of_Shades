let partition = (arr, pivot) =>{
    let left = 0
    let right = arr.length -1 

    while (left <= right){
        while((left <= right) && (arr[left] < pivot)){
            left++
        }
        while((left <= right) && (arr[right] >= pivot)){
            right--
        }
        if(left <= right){
            [arr[left] , arr[right]] = [arr[right] , arr[left]]

            left++
            right--    
        }
    }
    return arr
}

console.log(partition([7, 2, 9, 4, 3, 8, 1], 5))