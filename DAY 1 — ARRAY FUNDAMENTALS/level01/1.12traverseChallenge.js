const arr = [10, 20, 30, 40, 50];

const traverseChallenge = (arr) => {
    let sum = 0
    for (let i = 0 ; i < arr.length ; i++){
        sum += arr[i]
    }
    let max = 0
    let min = arr[0]
    for (let i = 0 ; i < arr.length ; i++){
        if (max < arr[i]){
            max = arr[i]
        }
    }
    for (let i = 0 ; i < arr.length ; i++){
        if (min > arr[i]){
            min = arr[i]
        }
    }
    return {
        sum,
        max,
        min

    }
}

console.log(traverseChallenge(arr))