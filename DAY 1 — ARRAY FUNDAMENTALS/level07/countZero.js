const maxWithNeg = (arr) =>{
    let slow = 0 
    for (let fast = 0 ; fast < arr.length ; fast++){
        if(arr[fast] === 0){
            arr[slow] = arr[fast]
            slow++
        }
    }
    return slow 
}

console.log(maxWithNeg([0]))