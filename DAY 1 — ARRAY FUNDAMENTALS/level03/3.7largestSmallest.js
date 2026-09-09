const arr = [10, 5, 20, 8, 15, 3, 25];

const arrOperation = (arr) =>{
    let largest = -Infinity
    let smallest = Infinity
    let secondLargest = -Infinity
    let secondSmallest = Infinity
    
    for (let i = 0 ; i < arr.length ; i++){
        if(arr[i]>= largest){
            largest = arr[i]
        }
        if(arr[i]<= smallest){
            smallest = arr[i]
        }
    }

    for (let i = 0 ; i < arr.length ; i++){
        if((arr[i]>= secondLargest)&&(arr[i]<largest)){
            secondLargest = arr[i]
        }
        if((arr[i]<= secondSmallest)&&(arr[i]>smallest)){
            secondSmallest = arr[i]
        }
    }

    return {
        largest,
        smallest,
        secondLargest,
        secondSmallest
    }
}

console.log(arrOperation(arr))