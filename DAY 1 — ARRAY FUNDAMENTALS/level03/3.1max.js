const arr = [4, 8, 2, 10, 6];
const max = (arr) => {
    let maxValue = arr[0]
    for (let i = 0 ; i < arr.length ; i++){
        if (arr[i]>=maxValue){
            maxValue = arr[i]
        }
    }
    return maxValue
}

console.log(max(arr))
console.log(max([-8, -3, -15, -2, -10]))