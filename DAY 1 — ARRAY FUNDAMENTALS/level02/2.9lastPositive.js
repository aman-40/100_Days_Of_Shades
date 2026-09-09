

const lastPositive = (arr) => {
    for (let i = arr.length -1 ; i >=0 ; i--){
        if(arr[i]>0){
            return arr[i]
        }
    }
    return false
}

console.log(lastPositive([-2, 5, -3, 8, 4, -1]))