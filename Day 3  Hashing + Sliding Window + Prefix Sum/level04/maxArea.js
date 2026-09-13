const maxArea = (height) => {
    let left = 0
    let right = height.length -1
    let maxArea = 0
    while(left < right){
        let length = Math.min(height[left] , height[right])
        let width = right - left
        let area = length * width
        if(area > maxArea){
            maxArea = area
        }
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return maxArea
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))