const arr = [5, 10, 15, 20, 25];

const sumOfElements = (arr) =>{
    let result = 0
    for (let i = 0 ; i < arr.length ; i++){
        result += arr[i]
    }
    return result
}

console.log(sumOfElements(arr))