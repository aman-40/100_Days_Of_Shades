const findMax = (arr)=>{
    let max = arr[0]
    for (let i = 0 ; i < arr.length ; i++){
        if (arr[i]>=max){
            max = arr[i]
        }
    }
    return max
}

console.log(findMax([4, 8, 2, 10, 6]))