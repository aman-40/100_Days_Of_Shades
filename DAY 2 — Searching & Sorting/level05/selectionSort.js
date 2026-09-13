const selectionSort = (nums) =>{
    for (let i = 0 ; i < nums.length -1 ; i++){
        let minIndex = i
        for (let j = i + 1 ; j < nums.length ; j++){
            //minIndex value finding
            if(nums[j] < nums[minIndex]){
                minIndex = j
            }
        }
        //swap
        let temp = nums[i]
        nums[i] = nums[minIndex]
        nums[minIndex] = temp
    }
    return nums
}

console.log(selectionSort([5, 3, 1, 1, 2]))