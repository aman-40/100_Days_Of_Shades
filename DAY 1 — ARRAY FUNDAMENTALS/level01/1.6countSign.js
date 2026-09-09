const arr = [-4, 5, 0, -2, 8, 0, 3, -1];

const countSign = (arr) =>{
    let zero = 0
    let negative = 0
    let positive = 0
    for (let i = 0 ; i < arr.length ; i++){
        if(arr[i]===0){
            zero++
        }else if(arr[i]<0){
            negative++
        }else{
            positive++
        }
    }
    return {
        negative,
        zero,
        positive
    }
}

console.log(countSign(arr))