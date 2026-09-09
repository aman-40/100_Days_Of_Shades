const arr = [3, 8, 5, 12, 7, 14, 9];

const lastEvenNumber = (arr) =>{
    for (let i = (arr.length-1) ; i >= 0 ; i--){
        if(arr[i]%2===0){
            return arr[i]
        }
    }
}

console.log(lastEvenNumber(arr))