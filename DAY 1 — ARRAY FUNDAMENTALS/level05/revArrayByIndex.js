

const revArrayByIndex = (arr , initialIndex, finalIndex) =>{
    let first = initialIndex
    let last = finalIndex
    if(finalIndex >= arr.length){
        return `index is outside the array`
    }

    while(first < last){
        arr[first] = arr[last] + arr[first]
        arr[last] = arr[first] - arr[last]
        arr[first] = arr[first] - arr[last]
        first++
        last--
    }

    return arr
}

console.log(revArrayByIndex([1,2,3,4,5,6],1,4))