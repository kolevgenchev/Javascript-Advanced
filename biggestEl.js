function biggestEl (matrix){
let arr=[]
for(el of matrix){
    let max=Math.max(...el)
    arr.push(max)
}
console.log( Math.max(...arr))
}biggestEl([[20, 50, 10],
    [8, 33, 145]])