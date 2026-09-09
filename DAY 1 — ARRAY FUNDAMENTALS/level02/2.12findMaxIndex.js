const findMaxIndex = (arr)=>{
    let max = arr[0]
    let index 
    for (let i = 0 ; i < arr.length ; i++){
        if (arr[i]>=max){
            max = arr[i]
            index = i
        }
    }
    return {
        max,
        index
    }
}

console.log(findMaxIndex([4, 8, 2, 10, 6]))