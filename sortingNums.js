function sortingNums(arr){
let ascending=arr.sort((a,b)=>a-b)
console.log(ascending)
let newArr=[]
while(ascending.length!==0){
    newArr.push(ascending.shift())
    newArr.push(ascending.pop())
}
return (newArr)
}sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])