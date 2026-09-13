const minEatingSpeed = (piles, h) => {
    let left = 1
    let right = Math.max(...piles)

    while(left <= right){
        let mid = left + Math.floor((right - left)/2)
        let hour = 0
        for(let i = 0 ; i < piles.length ; i++){
            hour += Math.ceil(piles[i]/mid)
        }
        if(hour <= h){
            right = mid -1
        }else{
            left = mid + 1
        }
    }
    return left
}

console.log(
    minEatingSpeed([3, 6, 7, 11], 8)
)
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5))