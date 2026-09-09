const keepEven = (arr) =>{

    let slow = 0
    for (let fast = 0 ; fast < arr.length ; fast++){
        if(arr[fast]%2===0){
            arr[slow] = arr[fast]
            slow++
        }
    }

    arr.length = slow
    return arr
}

console.log(keepEven([1, 2, 3, 4, 5, 6, 7, 8]))