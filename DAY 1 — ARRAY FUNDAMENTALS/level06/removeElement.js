const removeElement = (arr,target) =>{
    let slow = 0 
    for (let fast = 0 ; fast < arr.length ; fast++){
        if(arr[fast] !== target){
            arr[slow] = arr[fast]
            slow++
        }
    }

    arr.length = slow

    return arr
}

console.log(removeElement([3, 2, 2, 3,4,5,3,2,34,5,6,2], 3));