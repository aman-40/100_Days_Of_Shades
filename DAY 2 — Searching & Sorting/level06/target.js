const target = (nums , val) =>{
    //insertion sort
    for (let i = 1 ; i < nums.length ; i++){
        let key = nums[i]
        let j = i - 1
        while ((j >= 0) && (nums[j] > key)){
            nums[j + 1] = nums[j]
            j--
        }
        nums[j + 1] = key
    }

    //target
    let left = 0
    let right = nums.length -1
    while(left < right){
        let sum = nums[left] + nums[right]
        if(val === sum){
            let v1 = nums[left]
            let v2=  nums[right]
            return {
                v1,
                v2
            }
        }else if(val > sum){
            left++
        }else{
            right--
        }
    }

}

console.log(target([7, 2, 5, 1, 8, 3],9))