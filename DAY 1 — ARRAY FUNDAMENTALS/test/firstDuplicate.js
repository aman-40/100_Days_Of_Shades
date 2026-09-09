const firstDuplicate = (arr) =>{
    const seen = new Set()

    for (const num of arr){
        if (seen.has(num)){
            return true
        }
        seen.add(num)
    }
    return null
}

console.log(firstDuplicate([3, 1, 4, 2, 3]))