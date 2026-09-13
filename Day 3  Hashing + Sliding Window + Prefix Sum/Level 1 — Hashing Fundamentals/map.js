const frequency = (nums) =>{
    const map = new Map()
    for (let num of nums){
        if (map.has(num)) {
            map.set(num , map.get(num) + 1)
        } else {
            map.set(num , 1)
        }
    }

    return map 
}

console.log(frequency([2, 3, 2, 5, 3, 2]))