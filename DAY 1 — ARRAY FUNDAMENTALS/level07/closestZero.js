const closestZero = (arr) =>{
    if(arr.length === 0){
        return null
    }
    for (let fast = 0 ; fast < arr.length ; fast++){
        if((Math.abs(arr[fast])) < (Math.abs(arr[0]))){
            arr[0] = arr[fast]
        }
    }
    return arr[0]
}

console.log(closestZero([]))