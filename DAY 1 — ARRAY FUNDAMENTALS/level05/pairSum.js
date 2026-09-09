

const pairSum = (arr, target) =>{
    let left = 0
    let right = arr.length -1
    let result = []
    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum === target){
            result.push([arr[left],arr[right]])
        }
        if(sum < target){
            left++
        }else{
            right--
        }
    }
    return result
}

console.log(pairSum([0,1,2,4,6,8,10],10))