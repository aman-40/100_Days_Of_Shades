const arraySearch = (nums , target) =>{
    let row = 0
    let col = nums[0].length -1
    while(row < nums.length && col >= 0){
        let value = nums[row][col]
        if(value === target) return true
        if(value < target){
            row++
        }else{
            col--
        }
    }
    return false
} 