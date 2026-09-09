const arr = [4, 8, 2, 9, 1]
//9 as target
const index = (arr, target)=>{
    for (let i = 0 ; i < arr.length ; i++){
        if(target === arr[i]) return i
    }
    return -1
}

console.log(index(arr,7))