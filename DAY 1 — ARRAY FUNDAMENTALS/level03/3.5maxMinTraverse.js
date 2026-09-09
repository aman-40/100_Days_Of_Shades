const arr = [12, 4, 19, 7, 2, 25, 9];

const maxMinTraverse = (arr)=>{
    let maxValue = arr[0]
    let minValue = arr[0]
    let maxIndex = 0
    let minIndex = 0
    
    for (let i = 0 ; i < arr.length ; i++){
        if(arr[i]<= minValue){
            minValue = arr[i]
            minIndex = i
        }
        if(arr[i]>= maxValue){
            maxValue = arr[i]
            maxIndex = i
        }
    }
    
    return {
        maxValue,
        maxIndex,
        minValue,
        minIndex
    }
}
console.log(maxMinTraverse(arr))