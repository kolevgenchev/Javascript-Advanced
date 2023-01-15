function diagonalSums(arr){
    
let sum1=0
let sum2=0
let counter=0
let counter2=arr[0].length-1
for(el of arr){
    sum1+=el[counter]
    counter++
    sum2+=el[counter2]
    counter2--
}
console.log(`${sum1} ${sum2}`)




}diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])