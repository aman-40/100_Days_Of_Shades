const arr = [10, 20, 30, 40, 50, 60];

const printEvenIndices = (arr)=>{
    for(let i = 0 ; i < arr.length ; i++){
        if(i%2 === 0){
            console.log(arr[i])
        }
    }
}

printEvenIndices(arr)