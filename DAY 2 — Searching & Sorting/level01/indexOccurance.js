const indexOccurance = (arr , target) =>{
    let index = []
    for (let i = 0 ; i < arr.length ; i++){
        if(arr[i] === target){
            index.push(i)
        }
    }
    return index
}

console.log(indexOccurance([5, 2, 5, 8, 5, 1, 5], 5))