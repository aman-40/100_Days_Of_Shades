const findMinIndex = (arr)=>{
    let min = arr[0]
    let index 
    for (let i = 0 ; i < arr.length ; i++){
        if (arr[i]<=min){
            min = arr[i]
            index = i
        }
    }
    return {
        min,
        index
    }
}

console.log(findMinIndex([4, 8, 2, 10, 6]))