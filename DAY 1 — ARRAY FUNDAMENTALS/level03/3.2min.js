const arr = [4, 8, 2, 10, 6];
const min = (arr) => {
    let minValue = arr[0]
    for (let i = 0 ; i < arr.length ; i++){
        if (arr[i]<=minValue){
            minValue = arr[i]
        }
    }
    return minValue
}

console.log(min(arr))