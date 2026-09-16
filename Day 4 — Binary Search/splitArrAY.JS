const splitArray = (nums , k) =>{
    let left = Math.max(...nums)
    let right = nums.reduce((sum , num) => sum + num , 0)
    while(left < right){
        let mid = left + Math.floor((right - left)/2)
        let sum = 0
        let subArray = 1
        for(let i = 0 ; i < nums.length ; i++){
            if(sum + nums[i]<= mid){
                sum += nums[i]
            }else{
                subArray++
                sum = nums[i]
            }
        }

        if(subArray <= k){
            right = mid
        }else{
            left = mid + 1
        }
    }
    return right
}