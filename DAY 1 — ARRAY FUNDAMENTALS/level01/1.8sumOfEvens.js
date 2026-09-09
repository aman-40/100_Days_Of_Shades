const arr = [2, 7, 4, 9, 10, 13, 6];

const sumOfEvens = (arr) =>{
    let result = 0 
        for (let i = 0 ; i < arr.length ; i++){
            if(arr[i]%2===0){
                result += arr[i]
            }
    }
    return result
}

console.log(sumOfEvens(arr))