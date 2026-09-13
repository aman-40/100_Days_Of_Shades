const lastOccurance = (arr, target) =>{
    for (let i = arr.length -1 ; i >= 0 ; i--){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}

console.log(lastOccurance([4, 7, 2, 7, 9, 7], 7))