

const firstEvenNumber = (arr) =>{
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i]%2===0){
            return arr[i]
        }
    }
    return false
}

console.log(firstEvenNumber([3, 7, 9, 11]))