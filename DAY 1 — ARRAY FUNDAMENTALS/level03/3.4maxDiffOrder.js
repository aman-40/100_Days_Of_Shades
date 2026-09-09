const arr = [7, 1, 5, 3, 6, 4];
const maxDiffOrder = (arr) =>{
    let minValue = arr[0]//7
    let maxDifference = arr[1] - arr[0]//-6

    for(let i = 0 ; i < arr.length ; i++){
        const difference = arr[i] - minValue //4

        if(difference > maxDifference){
            maxDifference = difference    //4
        }
        if(arr[i]< minValue){
            minValue = arr[i]    //1
        }
    }
    return maxDifference
}