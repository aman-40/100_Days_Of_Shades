const isAnagram = (s , t) =>{
    if (s.length !== t.length) return false
    let map1 = new Map()
    for(let num of s){
        if(map1.has(num)){
            map1.set(num , map1.get(num) + 1)
        }else{
            map1.set(num , 1)
        }
    }
    for(let num of t){
        if(map1.has(num)){
            map1.set(num , map1.get(num) - 1)
            if(map1.get(num) < 0) return false
        }else{
            return false
        }
    }
    return true
}
console.log(isAnagram("listen", "silent"))
console.log(isAnagram("hello", "world"))
console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("aab","aaa"))