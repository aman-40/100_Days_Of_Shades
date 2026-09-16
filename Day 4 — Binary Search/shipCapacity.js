var shipWithinDays = function(weights, days) {
    let left = Math.max(...weights)
    let right= weights.reduce((sum , weight) => sum + weight, 0)
    while(left < right){
        let mid = left + Math.floor((right - left)/2)
        let dayUsed = 1
        let load = 0
        for (let i = 0 ; i < weights.length ; i++){
            if(weights[i] + load <= mid){
                load += weights[i]
            }else{
                dayUsed++
                load = weights[i]
            }
        }
        if(dayUsed <= days){
            right = mid

        }else{
            left = mid + 1
        }
    }
    return right
};