

const removeDuplicate = (arr) =>{
    let slow = 0
    for (let fast = 0 ; fast < arr.length ; fast++){
        if (arr[slow] !== arr[fast]){
            arr[slow + 1] = arr[fast]
            slow++
        }
    }

    arr.length = slow + 1
    return arr
}

console.log(removeDuplicate([1, 1, 2]))