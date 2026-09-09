

const secondSmall = (arr) => {

    let smallest = arr[0]
    let secondSmallest = Infinity

    for (let i = 0 ; i < arr.length ; i++){
        if (arr[i] < smallest){
            secondSmallest = smallest
            smallest = arr[i]
        }else if(
            arr[i] > smallest &&
            arr[i] < secondSmallest
        ){
            secondSmallest = arr[i]
        }
    }
    return secondSmallest
}

console.log(secondSmall([10, 5, 8, 3, 9]))