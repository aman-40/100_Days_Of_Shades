const arr = [3, 8, 12, 5, 7, 10, 14];

const countEvenNumbers = (arr) =>{
    let result = 0
    for (let i = 0 ; i < arr.length ; i++){
        if(arr[i]%2===0){
            result++
        }
    }
    return result
}

console.log(countEvenNumbers(arr))