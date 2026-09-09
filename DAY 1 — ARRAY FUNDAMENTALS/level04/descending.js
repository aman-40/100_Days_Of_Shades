

const descending = (arr) =>{

    for (let i = 0 ; i < arr.length ; i++){
        for (let j = 0 ; j < (arr.length -1 -i) ; j++){
            if (arr[j]< arr[j+1]){
                arr[j]= arr[j] + arr[j+1]
                arr[j+1] = arr[j] - arr[j+1]
                arr[j] = arr[j] - arr[j+1]
            }
        }
    }
    return arr
}

console.log(descending([ 1, 2, 4, 5, 8 ]))