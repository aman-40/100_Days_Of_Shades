const arr = [10, 20, 30, 40, 50];

const calculateAvg = (arr) => {
    let cal = 0
    for (let i = 0 ; i < arr.length ; i++){
        cal += arr[i]
    }
    let avg = Math.floor(cal/arr.length)
    let result = []
    for (let i = 0 ; i < arr.length ; i++){
        if (arr[i]>= avg){
            result.push(arr[i])
        }
    }
    return result
}

console.log(calculateAvg(arr))