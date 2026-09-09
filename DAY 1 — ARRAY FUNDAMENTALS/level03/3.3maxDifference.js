const arr = [4, 8, 2, 10, 6];
const maxDifference = (arr) => {
    let maxValue = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= maxValue) {
            maxValue = arr[i]
        }
    }

    let minValue = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= minValue) {
            minValue = arr[i]
        }
    }

    return (maxValue - minValue)
}

console.log(maxDifference(arr))