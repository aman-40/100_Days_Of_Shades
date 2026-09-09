const evenOddPartition = (arr) =>{
    left = 0
    right = arr.length -1

    while(left <= right){
        while((left <= right) && (arr[left]%2 == 0)){
            left++
        }
        while((left <= right) && (arr[right]%2 !== 0)){
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

console.log(evenOddPartition([2, 4, 6, 8, 3, 5, 1]))