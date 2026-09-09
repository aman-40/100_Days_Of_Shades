

const bubbleSort = (arr) =>{
    let swapped = false
    for (let i = 0 ; i < (arr.length - 1) ; i++){
        for (let j = 0 ; j < (arr.length - 1) ; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j]= arr[j+1]
                arr[j+1] = temp
                swapped = true

            }
        }
        if(!swapped){
            return arr
        }
    }

    return function(){
            return arr[arr.length -2]
    }
}

// const secondLargest = (arr) =>{
//     return arr[arr.length -2]
// }
const arr = [1,2,4,3,7,5]
console.log(bubbleSort(arr)())

