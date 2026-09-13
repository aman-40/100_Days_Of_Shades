const multiOccurance = (arr , target) =>{
    let count = 0
    for (let i = 0 ; i < arr.length ; i++){
        
        if(arr[i] === target){
            count++
        }
    }
    
    return count
}

console.log(multiOccurance([5, 2, 5, 8, 5, 1, 5],5))