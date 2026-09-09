const arr = [-10, 5, -3, 8, 12, -2, 7, 4];
const maxMinSign = (arr)=>{
    let maxPositive = -Infinity
    let minPositive = Infinity
    let maxNegative = -Infinity
    let minNegative = Infinity
    
    for (let i = 0 ; i < arr.length ; i++){
        if(arr[i]>= maxPositive){
            maxPositive = arr[i]
        }
        if((arr[i]<= minPositive)&&(arr[i] >= 0)){
            minPositive = arr[i]
        }
        if(arr[i]<= minNegative){
            minNegative = arr[i]
        }
        if((arr[i]>= maxNegative)&&(arr[i] < 0)){
            maxNegative = arr[i]
        }
    }
    
    return {
        maxPositive,
        minPositive,
        minNegative,
        maxNegative
    }
}
console.log(maxMinSign(arr))