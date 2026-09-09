

const secondLarge = (arr) => {

    let largest = arr[0]
    let secondLargest = -Infinity

    for (let i = 0 ; i < arr.length ; i++){
        if(arr[i] > largest){
            secondLargest = largest
            largest = arr[i]
        }else if (
            arr[i] < largest &&
            arr[i] > secondLargest
        ){
            secondLargest = arr[i]
        }
    }
    return secondLargest
}


const secondLargeTrace = (arr) => {

    let largest = arr[0]
    let secondLargest = -Infinity

    for (let i = 0 ; i < arr.length ; i++){
        if(arr[i] > largest){
            secondLargest = largest
            largest = arr[i]
            console.log(`secondLargest : ${secondLargest}`)
            console.log(`largest : ${largest}`)
        }else if (
            arr[i] < largest &&
            arr[i] > secondLargest
        ){
            secondLargest = arr[i]
            console.log(`secondLargest : ${secondLargest}`)
            console.log(`largest : ${largest}`)
        }
    }
    return `Final : ${secondLargest}`
}

console.log(secondLarge([10, 5, 8, 3, 9]))

console.log(secondLargeTrace([10, 5, 8, 3, 9]))