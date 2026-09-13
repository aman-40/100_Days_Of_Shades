const uniqueMap = (nums) =>{
    let map = new Map()

    for(let num of nums){
        if(map.has(num)){
            map.set(num , map.get(num) + 1)
        }else{
            map.set(num , 1)
        }
    }
    for(let [num , value] of map){
        if(value===1){
            return num
        }
    }
    return -1

}
console.log(uniqueMap([7, 3, 5, 3, 7, 8, 5]))