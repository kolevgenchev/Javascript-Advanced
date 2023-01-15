function smallestTwo(arr){
    let finalArr=[]
for(let i=0;i<2;i++){
let min=Math.min(...arr)
finalArr.push(min)
let index=arr.indexOf(min)
arr.splice(index,1)
}
console.log(finalArr)
}smallestTwo([30, 15, 50, 5])