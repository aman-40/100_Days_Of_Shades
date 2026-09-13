const firstOccurance = (arr, target) =>{
    for (let i = 0 ; i < arr.length ; i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}

console.log(firstOccurance([4, 7, 2, 7, 9, 7], 7))