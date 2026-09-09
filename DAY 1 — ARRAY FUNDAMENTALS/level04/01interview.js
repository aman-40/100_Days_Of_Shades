

const interview = (arr) =>{
    let largest = arr[0]
    let secondLargest = -Infinity
    let smallest = arr[0]
    let secondSmallest = Infinity

    for (let i = 0 ; i < arr.length ; i++){
        if(arr[i] >= largest){
            if(arr[i] !== largest){
                secondLargest = largest
                largest = arr[i]
            }
        }else if (
            arr[i] < largest &&
            arr[i] > secondLargest
        ){
            secondLargest = arr[i]
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= smallest) {
            if(arr[i]!==smallest){
                secondSmallest = smallest
                smallest = arr[i]
            }
        } else if (
            arr[i] > smallest &&
            arr[i] < secondSmallest
        ) {
            secondSmallest = arr[i]
        }
    }

    return {
    largest,
    secondLargest,
    smallest,
    secondSmallest
    }
}

console.log(interview([12, 7, 19, 3, 15, 8, 10]))