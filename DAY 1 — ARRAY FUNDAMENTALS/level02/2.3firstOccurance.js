const arr = [5, 2, 7, 2, 9, 2]
// target = 2

const firstOccurance = (arr, target) =>{
    for (let i = 0; i < arr.length ; i++){
        if (target === arr[i]) return `index : ${i}`
    }
    return false
}

console.log(firstOccurance(arr,2))