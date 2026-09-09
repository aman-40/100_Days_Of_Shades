const arr = [5, 2, 7, 2, 9, 2]
// target = 2

const countOccurance = (arr, target) =>{
    let count = 0
    for (let i = arr.length-1; i >= 0 ; i--){
        
        if (target === arr[i]) {
            count++
        }
    }
    return `count : ${count}`
}

console.log(countOccurance(arr,2))