const arr = [5, 2, 7, 2, 9, 2]
// target = 2

const countOccurance = (arr, target) =>{
    let count = []
    for (let i = arr.length-1; i >= 0 ; i--){
        
        if (target === arr[i]) {
            count.push(i)
        }
    }
    return count
}

console.log(countOccurance(arr,2))