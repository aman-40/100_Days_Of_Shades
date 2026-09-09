
const distinctSecondLarge = (arr) => {

    let largest = arr[0]
    let secondLargest = -Infinity

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
    return secondLargest
}

console.log(distinctSecondLarge([-10, -5, -20, -3, -8]))