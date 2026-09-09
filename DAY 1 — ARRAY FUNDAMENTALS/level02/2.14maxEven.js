const maxEven = (arr)=>{
    let max = arr[0]
    for (let i = 0 ; i < arr.length ; i++){
        if ((arr[i]>=max) && (arr[i]%2===0)){
            max = arr[i]
        }
    }
    return max
}

console.log(maxEven([3, 8, 5, 12, 7, 10]))