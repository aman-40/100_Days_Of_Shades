const arr = [4, 8, 2, 9, 1]
//9 as target
const contains = (arr, target)=>{
    for (let i = 0 ; i < arr.length ; i++){
        if(target === arr[i]) return true
    }
    return false
}

console.log(contains(arr,9))