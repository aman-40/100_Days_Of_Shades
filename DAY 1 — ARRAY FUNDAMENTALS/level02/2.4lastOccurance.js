const arr = [5, 2, 7, 2, 9, 2]
// target = 2

const lastOccurance = (arr, target) =>{
    for (let i = arr.length-1; i >= 0 ; i--){
        if (target === arr[i]) return `index : ${i}`
    }
    return false
}

console.log(lastOccurance(arr,2))