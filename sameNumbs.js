function sameNums(num){
let numArr=String(num).split("")
let isSame=numArr.filter(x=>x!==numArr[0]).length?false:true
let sum=0
for(el of numArr){
    sum+=Number(el)
}
console.log(isSame)
console.log(sum)
}sameNums(2222222)