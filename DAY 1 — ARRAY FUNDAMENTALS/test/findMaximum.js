const findMaximum = (arr) =>{
    if(arr.length == 0) return null
    let max = arr[0]

    for(let i = 1 ; i < arr.length ; i++){
        if (max < arr[i]){
            max = arr[i]
        }
    }
    return max
} 

console.log(findMaximum([-8, -3, -10, -2, -6]))

// Which approach?
// i used traversal by linearly because it is not sorted if sorted then there will be another appraoch use.

// How do you initialize your maximum?
//i initialise max with arr[0] or i can initialise it by -Infinity.

// Time complexity?
// i can calculate time complexity will be O(n)

// Space complexity?
// can you teach me how can i find this space complexity?

// What happens if the array is []?
// when i put empty array then it will return null if i dont add this condition then there is no 0 index so that it will throw undefined