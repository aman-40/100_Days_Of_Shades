const arr = [11, 24, 37, 42, 55, 68];

const printEvenValues = (arr) =>{
    for (let i = 0 ; i < arr.length ; i++){
        if(arr[i]%2===0){
            console.log(arr[i])
        }
    }
}

printEvenValues(arr)