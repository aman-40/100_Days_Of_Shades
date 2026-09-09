const arr = [3, 8, 2, 15, 5, 11];

const greaterThanX = (arr , target) =>{
    for (let i = 0 ; i < arr.length ; i++){
        if(arr[i]>target){
            return i
        }
    }
}

console.log(greaterThanX([10, 25, 7, 40, 18, 3],20))