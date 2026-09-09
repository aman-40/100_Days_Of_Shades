const arr = [3, 8, 2, 15, 5, 11];

const greaterThanX = (arr , target) =>{
    let check = []
    for (let i = 0 ; i < arr.length ; i++){
        if(arr[i]>target){
            check.push(arr[i])
        }
    }
    return check
}

console.log(greaterThanX(arr,10))