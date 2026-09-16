const kokoEatBanana = (piles , h) =>{
    let left = 1
    let right = Math.max(...piles)

    while(left < right){
        let mid = left + Math.floor((right - left)/2)
        let k = 0
        for(let i = 0 ; i < piles.length ; i++){
            k += Math.ceil(piles[i]/mid)
        }
        if(k <= h){
            right = mid
        }else{
            left = mid + 1
        }
    }
    return right
}