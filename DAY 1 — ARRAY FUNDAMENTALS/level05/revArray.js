

const revArray = (arr) =>{
    let first = 0
    let last = arr.length -1

    while(first < last){
        arr[first] = arr[last] + arr[first]
        arr[last] = arr[first] - arr[last]
        arr[first] = arr[first] - arr[last]
        first++
        last--
    }

    return arr
}

console.log(revArray([1]))