const arr = [7, 14, 21, 28, 35];

const findTheIndex = (arr, target)=>{
    let i = 0
    while(i < arr.length){
        if(arr[i] === target){
            return i
        }
        i++
    }
    if (i == arr.length)return `not found`
}

console.log(findTheIndex(arr,24))