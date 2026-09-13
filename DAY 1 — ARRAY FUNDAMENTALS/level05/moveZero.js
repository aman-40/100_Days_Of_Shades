

const moveZero = (arr) =>{
    let slow = 0
    for (let fast = 0 ; fast < arr.length ; fast++){
        if(arr[fast] !== 0){
            arr[slow] = arr[fast]
            slow++
        }
    }
    // arr.length = slow
    while(slow < arr.length){
        arr[slow] = 0
        slow++
    }
    return arr
}

console.log(moveZero([0, 1, 0, 3, 12]))